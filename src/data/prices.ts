// All prices in one place. Every page reads from here, so they can never disagree.
// Format: rupees as a number. Use formatINR() to show them.

export const PRICES = {
  implantOnly: 15000, // single implant, implant only (Korean/Indian)
  implantMetalCrown: 25000,
  implantCeramicCrown: 35000,
  implantZirconiaCrown: 45000,
  basalPerImplant: 35000,
  singleJaw: 150000, // upper or lower, 6–8 implants + fixed teeth
  fullMouth: 275000, // both jaws, all-inclusive
  traditionalFullMouth: 400000, // comparison figure for conventional full mouth implants
  rootCanal: 5000,
  metalBraces: 30000,
  ceramicBraces: 45000,
  wisdomTooth: 3000,
  cbctValue: 2000,
};

export function formatINR(n: number): string {
  return '₹' + n.toLocaleString('en-IN');
}

// The single price table shown on implant pages, so the different implant prices are explained side by side.
export const IMPLANT_PRICE_ROWS = [
  { item: 'Single implant (implant only)', price: PRICES.implantOnly, note: 'Korean / Indian implant, crown charged separately' },
  { item: 'Single implant + metal crown', price: PRICES.implantMetalCrown, note: 'Complete tooth' },
  { item: 'Single implant + ceramic crown', price: PRICES.implantCeramicCrown, note: 'Complete tooth, most chosen' },
  { item: 'Single implant + zirconia crown', price: PRICES.implantZirconiaCrown, note: 'Complete tooth, best looks' },
  { item: 'Basal implant (per implant)', price: PRICES.basalPerImplant, note: 'For bone loss, no bone graft' },
  { item: 'Single jaw fixed teeth (upper or lower)', price: PRICES.singleJaw, note: '6–8 implants + fixed teeth' },
  { item: 'Full mouth fixed teeth (both jaws)', price: PRICES.fullMouth, note: 'All-inclusive, fixed teeth in 3 days' },
];
