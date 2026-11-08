// One place for every clinic fact. Change a number here and it changes on every page.

export const SITE = {
  name: 'Urban Smile Dental Clinic',
  shortName: 'Urban Smile',
  url: 'https://urbansmile.in',
  tagline: 'Advanced Dental Implant Centre in Pune',
  doctor: {
    name: 'Dr. Manish Dighade',
    qualifications: 'BDS (MUHS), ICOI Member, OSOI Fellow',
    since: 2013,
  },
  phone: '+91 9272 097 210',
  phoneHref: 'tel:+919272097210',
  whatsapp: '919272097210',
  email: 'urbansmilepune@gmail.com',
  address: {
    line1: 'Shop No 105, W Bizz, Near Bhumkar Chowk Rd, above Starbucks',
    locality: 'Wakad, Pune',
    region: 'Maharashtra',
    postalCode: '411033',
    country: 'IN',
    full: 'Shop No 105, W Bizz, Near Bhumkar Chowk Rd, above Starbucks, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411033',
  },
  geo: { lat: 18.6078376, lng: 73.751649 },
  mapsUrl: 'https://maps.app.goo.gl/aVFDUk948eo9tPXA7',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8!2d73.751649!3d18.6078376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b978c3328959%3A0x64077d8571faa308!2sUrban%20Smile!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  hours: { days: 'Monday to Saturday', open: '10:00', close: '20:00', label: 'Mon–Sat, 10:00 AM – 8:00 PM' },
  social: {
    youtube: 'https://www.youtube.com/@urbansmilepune',
    instagram: 'https://www.instagram.com/urbansmile.ig',
  },
};

// Headline numbers. Keep these consistent everywhere.
export const STATS = {
  years: '12+',
  implants: '3,000+',
  patients: '5,000+',
  googleRating: '4.9',
  googleReviews: '100+',
  videos: '100+', // patient video testimonials on YouTube
  successRate: '98%',
};

export const waLink = (text = 'Hi, I would like to book an appointment') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
