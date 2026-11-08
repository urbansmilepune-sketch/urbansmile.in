// Patient cases. Slugs match the old site's URLs so existing Google links keep working.
// Two duplicate cases from the old site (Gokhale, Pardesi) are merged here and their extra URLs redirect.

export interface Story {
  slug: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  city: string;
  treatment: 'Full Mouth Implants' | 'Upper Arch Implants' | 'Basal Implants';
  days: number;
  video?: string; // YouTube ID
  headline: string;
  problem: string;
  treatmentDone: string;
  outcome: string;
  quote?: string;
  doctor: string;
}

export const STORIES: Story[] = [
  {
    slug: 'teeth-in-3-days-65-sujan-shirodkar-pune',
    name: 'Sujan Shirodkar', age: 65, gender: 'Male', city: 'Pune', treatment: 'Upper Arch Implants', days: 3, video: 'jwDLv2tTZig',
    headline: 'Upper Teeth Fixed in 3 Days for a 65-Year-Old Pune Patient',
    problem: 'Missing teeth in the upper jaw made chewing hard and eating uncomfortable, and he had lost confidence in his smile.',
    treatmentDone: 'Upper arch dental implants with immediate loading and a fixed bridge. The OPG X-ray shows the implants well spread across the upper arch for long-term support.',
    outcome: 'Fixed upper teeth in 3 days, comfortable chewing and his confidence back.',
    quote: 'Eating was difficult with missing upper teeth. Now I feel comfortable, and the whole process was quick and smooth.',
    doctor: 'Even a single-arch case can get good function and appearance in a short time when the implants are loaded immediately.',
  },
  {
    slug: 'full-mouth-dental-implants-70-deepak-nagwekar-mumb',
    name: 'Deepak Nagwekar', age: 70, gender: 'Male', city: 'Mumbai', treatment: 'Full Mouth Implants', days: 3, video: 'v20HY4eHEBE',
    headline: '70-Year-Old Mumbai Patient Gets Fixed Teeth in 3 Days',
    problem: 'Several missing teeth made chewing difficult and eating uncomfortable.',
    treatmentDone: 'Full mouth implants with immediate loading, a fixed bridge and bite correction.',
    outcome: 'Fixed teeth in 3 days. He now eats comfortably and smiles with confidence.',
    doctor: 'Full mouth implants work well for elderly patients too. With careful planning and immediate loading, function returns within days.',
  },
  {
    slug: 'full-mouth-dental-implants-55-anita-shelar-pune',
    name: 'Anita Shelar', age: 55, gender: 'Female', city: 'Pune', treatment: 'Full Mouth Implants', days: 3, video: '25H61KQwceM',
    headline: 'Fixed Teeth in 3 Days for Pune Patient Anita Shelar',
    problem: 'Several missing teeth, trouble chewing and low confidence when smiling.',
    treatmentDone: 'Full mouth dental implants with immediate loading, bite correction and smile restoration.',
    outcome: 'Fixed teeth in 3 days. She eats comfortably and smiles confidently again.',
    doctor: 'Immediate loading lets patients get back to normal life quickly, without a long waiting period.',
  },
  {
    slug: 'full-mouth-implant-deepak-gokhale-thane',
    name: 'Deepak Gokhale', age: 64, gender: 'Male', city: 'Thane', treatment: 'Full Mouth Implants', days: 3, video: '5L8lPgJaGuM',
    headline: 'From Thane to Pune: Full Mouth Implants in 3 Days',
    problem: 'Several missing teeth and root stumps in the lower jaw made eating hard and affected his speech.',
    treatmentDone: 'Root stumps removed, basal cortical implants placed in both jaws and loaded immediately with a fixed bridge. No bone graft was needed.',
    outcome: 'Fixed teeth in 3 days, full chewing restored and a fuller face and smile.',
    quote: 'Now I can eat everything comfortably and smile confidently.',
    doctor: 'His tooth loss needed careful planning. We chose immediate loading so he would not have to travel from Thane again and again.',
  },
  {
    slug: 'full-mouth-implant-madanlal-pardesi-pune',
    name: 'Madanlal Pardesi', age: 66, gender: 'Male', city: 'Pune', treatment: 'Full Mouth Implants', days: 3, video: 'AShvw68Ieas',
    headline: 'Complete Smile Transformation in 3 Days for Madanlal Pardesi',
    problem: 'Severe decay and several missing teeth made chewing and speaking difficult.',
    treatmentDone: 'Damaged teeth removed and a full-arch implant bridge placed in the upper jaw. In the lower jaw his healthy natural teeth were kept and extra implants added, all with immediate loading.',
    outcome: 'Fixed teeth in 3 days, comfortable chewing and a natural-looking smile.',
    quote: 'Now I can eat comfortably and smile confidently.',
    doctor: 'A full-arch bridge above with natural teeth kept below gives very good stability. This combined plan suits patients who still have some healthy teeth.',
  },
  {
    slug: 'full-mouth-dental-implants-55-mrs-ashwini-sawant-s',
    name: 'Ashwini Sawant', age: 55, gender: 'Female', city: 'Sindhudurg', treatment: 'Full Mouth Implants', days: 3, video: '1sdbSFn3XG0',
    headline: 'Fixed Teeth in 3 Days for a 55-Year-Old Patient from Sindhudurg',
    problem: 'Several missing teeth, trouble chewing and discomfort while eating.',
    treatmentDone: 'Full mouth implant rehabilitation with immediate fixed teeth and bite and smile correction.',
    outcome: 'Fixed teeth in 3 days, better chewing and her confidence back.',
    doctor: 'Immediate loading helps patients regain function and confidence quickly, even when many teeth are missing.',
  },
  {
    slug: 'full-mouth-dental-implants-65-mr-anil-pandharka-pu',
    name: 'Anil Pandharka', age: 65, gender: 'Male', city: 'Pune', treatment: 'Basal Implants', days: 3, video: 'wd4ncRCOUKI',
    headline: 'Fixed Teeth in 3 Days for a 65-Year-Old Pune Patient',
    problem: 'Several missing teeth, an uncomfortable bite and self-consciousness when smiling.',
    treatmentDone: 'Full mouth rehabilitation with basal implants, immediate loading, a fixed bridge and bite correction.',
    outcome: 'Fixed teeth in 3 days, easier chewing and a natural-looking smile.',
    doctor: 'Basal implants work very well for older patients with many missing teeth, and immediate loading brings function back quickly.',
  },
  {
    slug: 'basal-implants-62-kalpana-mahadik-pune',
    name: 'Kalpana Mahadik', age: 62, gender: 'Female', city: 'Pune', treatment: 'Basal Implants', days: 3, video: 'cLhMdo2d8HQ',
    headline: '62-Year-Old Patient Gets Fixed Teeth in Just 3 Days',
    problem: 'Several missing and weak teeth, difficulty eating and low confidence in her smile.',
    treatmentDone: 'Implants placed in both jaws and loaded immediately with a fixed bridge.',
    outcome: 'Fixed teeth in 3 days with better chewing, clearer speech and a natural smile.',
    quote: 'I have fixed teeth in just 3 days and I feel very happy.',
    doctor: 'Full mouth implants are a predictable long-term answer for many missing teeth, and immediate loading restores confidence quickly.',
  },
  {
    slug: 'teeth-in-3-days-60-ravindra-rajput-latur',
    name: 'Ravindra Rajput', age: 60, gender: 'Male', city: 'Latur', treatment: 'Full Mouth Implants', days: 3, video: 'VNPltLGeG0A',
    headline: 'Full Mouth Dental Implants in 3 Days for a Patient from Latur',
    problem: 'Several missing teeth and poor oral health made eating difficult.',
    treatmentDone: 'Full mouth implant surgery in the upper and lower jaw with immediate fixed teeth.',
    outcome: 'Fixed teeth in 3 days, better chewing and speech, and a stable result.',
    doctor: 'Full mouth implant surgery is a predictable option for people missing many teeth.',
  },
  {
    slug: '3-day-implants-69-arun-wasu-wardha',
    name: 'Arun Wasu', age: 69, gender: 'Male', city: 'Wardha', treatment: 'Full Mouth Implants', days: 3, video: 'L29_Dxq4Qb8',
    headline: '69-Year-Old Patient from Wardha Gets Fixed Teeth in 3 Days',
    problem: 'Several missing and weak teeth, and worry about whether implants were safe at his age.',
    treatmentDone: 'Full mouth implants in both jaws, loaded immediately with a fixed bridge.',
    outcome: 'Fixed teeth in 3 days, better chewing and a natural-looking smile.',
    quote: 'I was worried because of my age, but I got fixed teeth in just 3 days.',
    doctor: 'Age is not a limit for dental implants when planning is done properly.',
  },
  {
    slug: 'full-mouth-dental-implants-55-nabha-mahabaleshwark',
    name: 'Nabha Mahabaleshwarkar', age: 55, gender: 'Female', city: 'Pune', treatment: 'Full Mouth Implants', days: 3, video: 'W_reDoVbyUg',
    headline: 'Full Mouth Dental Implants in 3 Days for Nabha Mahabaleshwarkar',
    problem: 'Several missing, loose and damaged teeth made chewing difficult.',
    treatmentDone: 'After CBCT and OPG planning, implants were placed in both jaws using her available bone and loaded immediately.',
    outcome: 'Fixed teeth in 3 days with better chewing, clearer speech and a natural smile.',
    doctor: 'Careful CBCT-based planning lets us do full mouth rehabilitation quickly and safely, even when teeth are badly damaged.',
  },
  {
    slug: '-55-year-old-pune',
    name: 'Sunita Patil', age: 55, gender: 'Female', city: 'Pune', treatment: 'Full Mouth Implants', days: 3, video: '-dtNw6KLaL4',
    headline: 'No Teeth to Fixed Teeth in 3 Days',
    problem: 'No natural teeth left, and loose, uncomfortable dentures that hurt her confidence.',
    treatmentDone: 'Full mouth implants in both jaws with an implant-supported fixed bridge that replaced her removable dentures.',
    outcome: 'Fixed teeth in 3 days, no more loose dentures, better chewing and speech.',
    doctor: 'People with no natural teeth can get fixed teeth quickly with modern implant methods.',
  },
  {
    slug: '-44-year-old-mumbai',
    name: 'Yogita Salvi', age: 44, gender: 'Female', city: 'Mumbai', treatment: 'Full Mouth Implants', days: 3, video: '7tuasirlPYE',
    headline: '44-Year-Old Mumbai Patient Gets Fixed Teeth in 3 Days',
    problem: 'Several missing teeth, trouble chewing and an unhappy smile.',
    treatmentDone: 'Full mouth implants in both jaws with immediate loading and a fixed full-arch bridge.',
    outcome: 'Fixed teeth in 3 days, better chewing and a natural smile.',
    quote: 'I got my teeth fixed in just 3 days.',
    doctor: 'Full mouth implants also help younger patients with serious dental problems.',
  },
  {
    slug: 'full-mouth-dental-implants-pune-75-year-patient',
    name: 'Pradeep Vakil', age: 75, gender: 'Male', city: 'Pune', treatment: 'Full Mouth Implants', days: 3, video: 'uftkRXFa8Vs',
    headline: 'Full Mouth Implants in 3 Days for a 75-Year-Old Pune Patient',
    problem: 'Trouble chewing, several missing or weak teeth and poor bite support.',
    treatmentDone: 'Implants in both jaws with immediate loading and a fixed full-arch bridge.',
    outcome: 'Fixed teeth in 3 days. He eats comfortably and feels more confident.',
    quote: 'I got my teeth fixed in just 3 days.',
    doctor: 'Older patients benefit a lot from immediate-loading implants: function and appearance return without a long treatment period.',
  },
  {
    slug: 'full-mouth-dental-implants-mumbai-72-year-patient',
    name: 'Ashok Gaba', age: 72, gender: 'Male', city: 'Mumbai', treatment: 'Basal Implants', days: 3, video: '1sli52k50MY',
    headline: 'Full Mouth Implants in 3 Days for a 72-Year-Old Mumbai Patient',
    problem: 'Trouble chewing and several missing and damaged teeth.',
    treatmentDone: 'Damaged teeth removed and basal implants placed in both jaws with immediate loading and a fixed bridge. No bone graft was needed.',
    outcome: 'Fixed teeth within 72 hours, full chewing restored and a natural smile.',
    doctor: 'Elderly patients with weak teeth still do well with immediate-loading basal implants, without bone grafting.',
  },
];
