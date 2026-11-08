// Run after `npm run build`: checks every page for one H1, a unique title and description,
// a canonical link, and that internal links point at real pages.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist/client';
const pages = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) pages.push(p);
  }
})(root);

const redirects = new Set(['/basal-implants-pune', '/teeth-in-3-days', '/blog/test-blog-post', '/book-appointment', '/appointment',
  '/patient-stories/full-mouth-dental-implants-pune-63-year-patient-case', '/patient-stories/full-mouth-dental-implants-pune-66-year-patient-case']);
const titles = new Map();
const descs = new Map();
let problems = 0;
const bad = (page, msg) => { problems++; console.log(`✗ ${page}: ${msg}`); };

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const url = '/' + file.slice(root.length + 1).replace(/index\.html$/, '').replace(/\/$/, '');
  if (html.includes('http-equiv="refresh"')) continue; // redirect stub
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) bad(url, `${h1} <h1> tags`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1] ?? '';
  if (!title) bad(url, 'no title');
  if (title.length > 70) console.log(`  note ${url}: title ${title.length} chars`);
  if ((title.match(/Urban Smile Dental Clinic/g) || []).length > 1) bad(url, 'brand repeated in title');
  if (desc.length < 70 || desc.length > 170) console.log(`  note ${url}: description ${desc.length} chars`);
  if (titles.has(title)) bad(url, `duplicate title with ${titles.get(title)}`); else titles.set(title, url);
  if (descs.has(desc)) bad(url, `duplicate description with ${descs.get(desc)}`); else descs.set(desc, url);
  if (!url.includes('404') && !html.includes('rel="canonical"')) bad(url, 'no canonical');
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (href.startsWith('/_astro') || href === '/sitemap-index.xml' || href.startsWith('/api')) continue;
    const clean = href.replace(/\/$/, '') || '/';
    const target = clean === '/' ? join(root, 'index.html') : join(root, clean, 'index.html');
    if (!existsSync(target) && !existsSync(join(root, clean)) && !redirects.has(clean)) bad(url, `broken link ${href}`);
  }
}
console.log(`\nChecked ${pages.length} files, ${problems} problem(s).`);
process.exit(problems ? 1 : 0);
