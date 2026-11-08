// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://urbansmile.in',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  adapter: vercel({ webAnalytics: { enabled: false } }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
    }),
  ],
  // Old URLs that now point at one page each. These become permanent (301/308) redirects on Vercel,
  // so any Google ranking the old URL had passes to the new one.
  redirects: {
    '/basal-implants-pune': { status: 301, destination: '/dental-implants/basal-implants' },
    '/teeth-in-3-days': { status: 301, destination: '/dental-implants/3-day-implants' },
    '/blog/test-blog-post': { status: 301, destination: '/blog' },
    '/patient-stories/full-mouth-dental-implants-pune-63-year-patient-case': {
      status: 301,
      destination: '/patient-stories/full-mouth-implant-deepak-gokhale-thane',
    },
    '/patient-stories/full-mouth-dental-implants-pune-66-year-patient-case': {
      status: 301,
      destination: '/patient-stories/full-mouth-implant-madanlal-pardesi-pune',
    },
    '/book-appointment': { status: 301, destination: '/book' },
    '/appointment': { status: 301, destination: '/book' },
  },
});
