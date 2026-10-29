// src/config/site.ts

export const SITE_CONFIG = {
  name: 'Touch Base Consulting',
  url: 'https://touchbaseconsulting.co.za',
  gbpUrl: 'https://maps.app.goo.gl/vTgbRAoKkY9g1YcQA',
  gbpLocationId: '10480871419222126634',
  phoneDisplay: '+27 75 090 8984',
  phoneE164: '+27750908984',
  whatsappNumber: '27750908984',
  whatsappBaseUrl: 'https://wa.me/27750908984',
  email: 'Customerservice@touchbaseconsulting.co.za',
  address: {
    streetAddress: '61 De Villiers Street',
    suburb: 'Sandbaai',
    city: 'Hermanus',
    province: 'Western Cape',
    postalCode: '7200',
    country: 'ZA',
    countryName: 'South Africa',
    formatted: '61 De Villiers Street, Sandbaai, Hermanus, Western Cape, 7200, South Africa',
  },
  hours: {
    regular: 'Monday – Friday: 08:00 – 17:00 SAST',
    weekendNote: 'Emergency map ranking & server monitoring available on weekends.',
  },
  geo: {
    latitude: -34.4241,
    longitude: 19.2030,
  },
} as const;
