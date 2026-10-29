// src/config/site.ts

export const SITE_CONFIG = {
  name: 'Touch Base Consulting',
  url: 'https://touchbaseconsulting.co.za',
  gbpUrl: 'https://maps.app.goo.gl/vTgbRAoKkY9g1YcQA',
  gbpLocationId: '10480871419222126634',
  phoneDisplay: '072 767 4800',
  phoneE164: '+27727674800',
  whatsappNumber: '27727674800',
  whatsappBaseUrl: 'https://wa.me/27727674800',
  email: 'dewaldwiid@gmail.com',
  address: {
    suburb: 'Sandbaai',
    city: 'Hermanus',
    province: 'Western Cape',
    postalCode: '7200',
    country: 'ZA',
    formatted: 'Sandbaai, Hermanus, Western Cape, 7200',
  },
  geo: {
    latitude: -34.4241,
    longitude: 19.2030,
  },
} as const;
