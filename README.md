# urbansmile.in

Website for Urban Smile Dental Clinic, Wakad, Pune. Built with [Astro](https://astro.build) as a static site on Vercel, with a booking form that saves to Supabase and emails the clinic through Resend.

## Why this setup

- **Fast:** every page is plain HTML built ahead of time. No framework JavaScript is sent to visitors. YouTube videos load only when tapped.
- **Cheap:** Vercel Hobby, Supabase Free, Resend Free (3,000 emails/month) and Cloudinary Free cover this site. The only cost is the domain.
- **SEO:** unique titles and descriptions, one H1 per page, canonical URLs, `sitemap-index.xml`, `robots.txt`, schema.org `Dentist`, `FAQPage`, `BreadcrumbList`, `BlogPosting` and `Person` markup, and 301 redirects from old duplicate URLs.

## Editing content

| What | File |
| --- | --- |
| Prices (used on every page) | `src/data/prices.ts` |
| Phone, address, hours, stats (implants, years, rating, video count) | `src/data/site.ts` |
| Patient stories | `src/data/stories.ts` |
| Area pages (Wakad, Hinjewadi, Baner, Pimple Saudagar) | `src/data/areas.ts` |
| Blog posts | add a `.md` file in `src/content/blog/` |
| Redirects from old URLs | `astro.config.mjs` |

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # builds to .vercel/output
npm run check    # after build: checks titles, H1s, canonicals and internal links
```

## Deploy (one time)

1. **Supabase:** create a project, open SQL Editor, run `supabase/schema.sql`.
2. **Resend:** create an API key. Add and verify the `urbansmile.in` domain (it gives you DNS records to add).
3. **Vercel:** "Add New Project", import this GitHub repo (framework: Astro, detected automatically). Add the variables from `.env.example`. Deploy.
4. **Test** the preview URL: submit the booking form and check the row in Supabase and the email.
5. **Domain:** in Vercel → Settings → Domains add `urbansmile.in` and `www.urbansmile.in`, then change the DNS at your registrar to what Vercel shows.
6. **Google Search Console:** submit `https://urbansmile.in/sitemap-index.xml`.

## Viewing bookings

Supabase → Table Editor → `appointments`. Change `status` as you call people back (`new`, `contacted`, `booked`, `done`, `spam`).
