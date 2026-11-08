import { PRICES, formatINR } from './prices';

const implantCost = `A single implant starts at ${formatINR(PRICES.implantOnly)} (implant only) or ${formatINR(PRICES.implantCeramicCrown)} with a ceramic crown. Full mouth implants are ${formatINR(PRICES.fullMouth)} all-inclusive, with a free CBCT scan.`;

// Area pages. Each one has its own local details so they are not copies of each other.
export interface Area {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  travel: string; // how to reach the clinic
  minutes: number;
  localPoints: { h: string; p: string }[];
  nearby: string[];
  faqs: { q: string; a: string }[];
}

export const AREAS: Area[] = [
  {
    slug: 'dentist-in-wakad-pune',
    name: 'Wakad',
    title: 'Dentist in Wakad, Pune | Dental Clinic near Bhumkar Chowk | Urban Smile',
    description: 'Urban Smile Dental Clinic in Wakad, near Bhumkar Chowk above Starbucks. Dental implants in 3 days, root canal, braces and cosmetic dentistry by Dr. Manish Dighade. Free parking.',
    h1: 'Dentist in Wakad, Pune',
    intro: 'Urban Smile is right in Wakad, in the W Bizz building near Bhumkar Chowk, above Starbucks. Families and IT professionals in Wakad come to us for everything from check-ups to full mouth implants.',
    travel: 'We are on Bhumkar Chowk Road, the main Wakad–Hinjewadi stretch, in W Bizz (above Starbucks). Free parking is available in the building.',
    minutes: 0,
    localPoints: [
      { h: 'In the heart of Wakad', p: 'Walking distance for residents around Bhumkar Chowk, Datta Mandir Road and Kaspate Wasti.' },
      { h: 'Evening appointments', p: 'Open until 8 PM Monday to Saturday, so you can come after work.' },
      { h: 'Implant centre', p: 'Full mouth fixed teeth in 3 days using basal and cortical implants.' },
      { h: 'CBCT scanning', p: '3D scan for precise implant planning, free with implant treatment.' },
    ],
    nearby: ['Kaspate Wasti', 'Datta Mandir Road', 'Bhumkar Chowk', 'Thergaon', 'Punawale', 'Tathawade'],
    faqs: [
      { q: 'Where exactly is the clinic in Wakad?', a: 'Shop No 105, W Bizz, near Bhumkar Chowk Road, above Starbucks, Wakad, Pune 411033. Free parking is available.' },
      { q: 'Do you treat dental emergencies in Wakad?', a: 'Yes. Call or WhatsApp +91 9272 097 210 and we will see urgent cases the same day during clinic hours (Mon–Sat, 10 AM – 8 PM).' },
      { q: 'What does an implant cost at your Wakad clinic?', a: implantCost },
      { q: 'Are 3-day implants available in Wakad?', a: 'Yes. Most full mouth patients get fixed teeth within 72 hours using basal implants, without bone grafting.' },
    ],
  },
  {
    slug: 'dentist-in-hinjewadi-pune',
    name: 'Hinjewadi',
    title: 'Dentist near Hinjewadi IT Park, Pune | Urban Smile Dental Clinic',
    description: 'Dental clinic 5 minutes from Hinjewadi IT Park. Lunch-hour and after-work appointments for implants, root canal, braces and cosmetic dentistry. Urban Smile, Wakad.',
    h1: 'Dentist near Hinjewadi IT Park, Pune',
    intro: 'Work in Hinjewadi Phase 1, 2 or 3? Urban Smile is about 5 minutes away by the Wakad–Hinjewadi road, with lunch-hour and after-work slots so you don\'t have to take a day off.',
    travel: 'Drive or take an auto down the Wakad–Hinjewadi road towards Bhumkar Chowk. We are in W Bizz, above Starbucks. Free parking.',
    minutes: 5,
    localPoints: [
      { h: '5 minutes from the IT Park', p: 'Quick access from Phase 1, 2 and 3.' },
      { h: 'Lunch-hour appointments', p: 'Express consultations that fit in a lunch break.' },
      { h: 'After-work slots', p: 'Open until 8 PM, Monday to Saturday.' },
      { h: 'Corporate-friendly', p: 'Clear written estimates you can submit for insurance or reimbursement.' },
    ],
    nearby: ['Hinjewadi Phase 1', 'Hinjewadi Phase 2', 'Hinjewadi Phase 3', 'Maan', 'Marunji', 'Mahalunge'],
    faqs: [
      { q: 'How far is the clinic from Hinjewadi IT Park?', a: 'About a 5-minute drive via the Wakad–Hinjewadi road. We are at W Bizz near Bhumkar Chowk, above Starbucks.' },
      { q: 'Can I come during my lunch break?', a: 'Yes. We offer lunch-hour and after-work appointments Monday to Saturday, 10 AM to 8 PM. Book ahead so there is no wait.' },
      { q: 'Which treatments do you offer for Hinjewadi patients?', a: 'Implants (including fixed teeth in 3 days), root canal, braces and aligners, whitening, smile makeovers and general dentistry.' },
      { q: 'Do you provide estimates for insurance?', a: 'Yes, we give a written treatment estimate and invoices you can submit to your insurer or employer.' },
    ],
  },
  {
    slug: 'dentist-in-baner-pune',
    name: 'Baner',
    title: 'Dentist for Baner, Pune | Implants & Cosmetic Dentistry | Urban Smile',
    description: 'Dental clinic about 10 minutes from Baner via Balewadi. Implant specialist Dr. Manish Dighade, transparent pricing, smile makeovers and fixed teeth in 3 days.',
    h1: 'Dentist for Baner, Pune',
    intro: 'Baner residents reach Urban Smile in about 10 minutes via Balewadi. Many come to us for implants, smile makeovers and clear aligners with transparent, written pricing.',
    travel: 'From Baner, head through Balewadi towards Wakad and Bhumkar Chowk. We are in W Bizz, above Starbucks, with free parking.',
    minutes: 10,
    localPoints: [
      { h: '10 minutes via Balewadi', p: 'Easy drive from Baner Road, Balewadi High Street and Sus Road.' },
      { h: 'Implant specialist', p: '3,000+ implants placed, ICOI member.' },
      { h: 'Cosmetic dentistry', p: 'Veneers, whitening and digital smile design.' },
      { h: 'Written pricing', p: 'Clear estimates before treatment, no hidden costs.' },
    ],
    nearby: ['Baner Road', 'Balewadi', 'Sus Road', 'Pashan', 'Mahalunge'],
    faqs: [
      { q: 'How far is Urban Smile from Baner?', a: 'About 10 minutes by road via Balewadi.' },
      { q: 'Do you offer smile makeovers for Baner patients?', a: 'Yes: veneers, whitening, bonding and digital smile design so you can preview the result first.' },
      { q: 'What do implants cost?', a: implantCost },
      { q: 'Is Dr. Dighade an implant specialist?', a: 'Yes. He has focused on implant surgery since 2016, is an ICOI member and has placed 3,000+ implants.' },
    ],
  },
  {
    slug: 'dentist-in-pimple-saudagar-pune',
    name: 'Pimple Saudagar',
    title: 'Dentist for Pimple Saudagar, Pune | Family Dental Clinic | Urban Smile',
    description: 'Family dental clinic about 8 minutes from Pimple Saudagar via Wakad Bridge. Kids and adult dentistry, implants, root canal and braces. Serving Pimple Nilakh and Pimple Gurav too.',
    h1: 'Dentist for Pimple Saudagar, Pune',
    intro: 'Families in Pimple Saudagar, Pimple Nilakh and Pimple Gurav reach us in about 8 minutes over Wakad Bridge. We look after the whole family, from children\'s check-ups to grandparents\' implants.',
    travel: 'Cross Wakad Bridge and head to Bhumkar Chowk. We are in W Bizz, above Starbucks. Free parking.',
    minutes: 8,
    localPoints: [
      { h: '8 minutes via Wakad Bridge', p: 'Close to Kunal Icon Road, Rahatani and Pimple Nilakh.' },
      { h: 'Family dentistry', p: 'Check-ups, fillings and braces for children and adults.' },
      { h: 'Implants for parents', p: 'Fixed teeth in 3 days, even for patients over 70.' },
      { h: 'Affordable and transparent', p: 'Written estimates and EMI options.' },
    ],
    nearby: ['Pimple Nilakh', 'Pimple Gurav', 'Rahatani', 'Kunal Icon Road', 'Jagtap Dairy'],
    faqs: [
      { q: 'How far is the clinic from Pimple Saudagar?', a: 'About 8 minutes via Wakad Bridge. Pimple Nilakh and Pimple Gurav are similarly close.' },
      { q: 'Do you treat children?', a: 'Yes, we see children for check-ups, fillings and early orthodontic assessment.' },
      { q: 'Can elderly parents get implants?', a: 'Yes. We regularly treat patients aged 60 to 80+, often with basal implants that need no bone graft.' },
      { q: 'Do you handle dental emergencies?', a: 'Yes. Call +91 9272 097 210 for an urgent appointment during clinic hours.' },
    ],
  },
];
