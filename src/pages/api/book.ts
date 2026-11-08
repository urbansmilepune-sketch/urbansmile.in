// Booking and contact form handler (runs as a Vercel serverless function).
// 1. Saves the request in Supabase (table: appointments).
// 2. Emails the clinic through Resend.
// 3. Emails the patient a confirmation if they gave an email.
import type { APIRoute } from 'astro';

export const prerender = false;

const env = (k: string) => (import.meta.env[k] ?? process.env[k]) as string | undefined;

const clean = (v: FormDataEntryValue | null, max = 200) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function reply(req: Request, status: number, body: Record<string, unknown>) {
  const wantsJson = (req.headers.get('accept') ?? '').includes('application/json');
  if (wantsJson) return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  // No-JS form post: send the browser to a page.
  return Response.redirect(new URL(status < 300 ? '/thank-you' : '/book?error=1', req.url), 303);
}

async function saveToSupabase(row: Record<string, string | null>) {
  const url = env('SUPABASE_URL');
  const key = env('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) return { ok: false, error: 'Supabase not configured' };
  const res = await fetch(`${url}/rest/v1/appointments`, {
    method: 'POST',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify(row),
  });
  return res.ok ? { ok: true } : { ok: false, error: `Supabase ${res.status}: ${await res.text()}` };
}

async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
  const key = env('RESEND_API_KEY');
  const from = env('RESEND_FROM') ?? 'Urban Smile Website <onboarding@resend.dev>';
  if (!key) return { ok: false, error: 'Resend not configured' };
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], subject, html, ...(replyTo ? { reply_to: replyTo } : {}) }),
  });
  return res.ok ? { ok: true } : { ok: false, error: `Resend ${res.status}: ${await res.text()}` };
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(request, 400, { error: 'Invalid form.' });
  }

  // Bots fill the hidden "company" field; pretend success and drop it.
  if (clean(form.get('company'))) return reply(request, 200, { ok: true });

  const type = clean(form.get('type'), 20) === 'contact' ? 'contact' : 'appointment';
  const name = clean(form.get('name'), 100);
  const phone = clean(form.get('phone'), 20);
  const email = clean(form.get('email'), 150);
  const treatment = clean(form.get('treatment'), 60);
  const preferred_date = clean(form.get('preferred_date'), 10);
  const preferred_time = clean(form.get('preferred_time'), 30);
  const message = clean(form.get('message'), 2000);
  const source = clean(form.get('source'), 200);

  if (!name) return reply(request, 400, { error: 'Please enter your name.' });
  if (!/^[0-9+\s-]{8,16}$/.test(phone)) return reply(request, 400, { error: 'Please enter a valid phone number.' });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply(request, 400, { error: 'Please check your email address.' });
  if (preferred_date && !/^\d{4}-\d{2}-\d{2}$/.test(preferred_date)) return reply(request, 400, { error: 'Please check the date.' });

  const row = {
    type, name, phone,
    email: email || null,
    treatment: treatment || null,
    preferred_date: preferred_date || null,
    preferred_time: preferred_time || null,
    message: message || null,
    source_page: source || null,
  };

  const saved = await saveToSupabase(row);
  if (!saved.ok) console.error(saved.error);

  const clinicTo = env('CLINIC_EMAIL') ?? 'urbansmilepune@gmail.com';
  const lines = [
    ['Type', type], ['Name', name], ['Phone', phone], ['Email', email], ['Treatment', treatment],
    ['Preferred date', preferred_date], ['Preferred time', preferred_time], ['Message', message], ['Page', source],
  ].filter(([, v]) => v);
  const table = lines.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('');
  const waNum = phone.replace(/[^0-9]/g, '').replace(/^0/, '');
  const wa = `https://wa.me/${waNum.length === 10 ? '91' + waNum : waNum}`;
  const notified = await sendEmail(
    clinicTo,
    `New ${type === 'contact' ? 'message' : 'appointment request'}: ${name} (${phone})`,
    `<h2>New ${type} from urbansmile.in</h2><table>${table}</table><p><a href="${wa}">Reply on WhatsApp</a></p>`,
    email || undefined,
  );
  if (!notified.ok) console.error(notified.error);

  // If neither storage nor email worked, tell the visitor so they call instead.
  if (!saved.ok && !notified.ok) return reply(request, 500, { error: 'We could not send your request.' });

  if (email && env('RESEND_FROM')) {
    await sendEmail(
      email,
      'We received your request | Urban Smile Dental Clinic',
      `<p>Hi ${esc(name)},</p><p>Thank you for contacting Urban Smile Dental Clinic. We will call you on ${esc(phone)} within 2 hours during clinic hours (Mon–Sat, 10 AM – 8 PM) to confirm your visit.</p><p>Need us sooner? Call or WhatsApp +91 9272 097 210.</p><p>Urban Smile Dental Clinic<br>Shop No 105, W Bizz, near Bhumkar Chowk, above Starbucks, Wakad, Pune 411033</p>`,
    ).catch(() => {});
  }

  return reply(request, 200, { ok: true });
};
