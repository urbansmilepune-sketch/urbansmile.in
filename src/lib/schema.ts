import { SITE, STATS } from '../data/site';

// schema.org markup for the clinic. Google uses this for the map pack and knowledge panel.
export function dentistSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${SITE.url}/#clinic`,
    name: SITE.name,
    url: SITE.url,
    telephone: '+919272097210',
    email: SITE.email,
    image: `${SITE.url}/og.png`,
    logo: `${SITE.url}/favicon.svg`,
    priceRange: '₹₹',
    description: `${SITE.tagline}. Full mouth dental implants in 3 days, basal implants, root canal, braces and smile makeovers in Wakad, Pune, by ${SITE.doctor.name}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1,
      addressLocality: 'Wakad, Pune',
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: SITE.hours.open,
        closes: SITE.hours.close,
      },
    ],
    areaServed: ['Wakad', 'Hinjewadi', 'Baner', 'Pimple Saudagar', 'Pimple Nilakh', 'Aundh', 'Balewadi', 'Kothrud', 'Pimpri-Chinchwad', 'Pune'].map(
      (name) => ({ '@type': 'Place', name }),
    ),
    sameAs: [SITE.social.youtube, SITE.social.instagram, SITE.mapsUrl],
    founder: { '@id': `${SITE.url}/about#doctor` },
    employee: { '@id': `${SITE.url}/about#doctor` },
    medicalSpecialty: 'Dentistry',
    availableService: [
      'Full mouth dental implants',
      'Basal implants',
      'Single tooth implants',
      'Root canal treatment',
      'Orthodontics',
      'Smile makeover',
    ].map((name) => ({ '@type': 'MedicalProcedure', name })),
    slogan: `${STATS.implants} implants placed`,
  };
}

export function doctorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/about#doctor`,
    name: SITE.doctor.name,
    jobTitle: 'Dental Implant Specialist',
    honorificPrefix: 'Dr.',
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Maharashtra University of Health Sciences (MUHS)' },
    memberOf: { '@type': 'Organization', name: 'International Congress of Oral Implantologists (ICOI)' },
    worksFor: { '@id': `${SITE.url}/#clinic` },
    url: `${SITE.url}/about`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE.url + it.url,
    })),
  };
}
