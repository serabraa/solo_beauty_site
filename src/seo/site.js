export const origin = 'https://solobeauty.am';
export const pages = {
  hy: {
    path: '/', locale: 'hy_AM',
    title: 'Solo Beauty — գեղեցկության սրահ Գյումրիում',
    description: 'Solo Beauty Գյումրիում՝ մատնահարդարում, պեդիկյուր, մազերի ներկում և հարսանեկան դիմահարդարում։ Ռիժկովի փողոց 3/1։ Ամրագրեք առցանց կամ զանգահարեք +374 93 000217։',
  },
  ru: {
    path: '/ru/', locale: 'ru_RU',
    title: 'Solo Beauty — салон красоты в Гюмри',
    description: 'Solo Beauty в Гюмри: стрижки, окрашивание, маникюр, педикюр, макияж, брови и ресницы. Адрес: ул. Рыжкова 3/1. Запись онлайн или по телефону +374 93 000217.',
  },
};

// Existing site facts only. Prices, coordinates and review aggregates need
// separate verification and must not be inferred from directory snippets.
export const business = {
  '@type': 'BeautySalon',
  '@id': `${origin}/#salon`,
  name: 'Solo Beauty',
  url: `${origin}/`,
  logo: `${origin}/solo_logo.png`,
  image: `${origin}/og-image.jpg`,
  telephone: '+37493000217',
  address: {
    '@type': 'PostalAddress', streetAddress: 'Ռիժկովի փողոց 3/1',
    addressLocality: 'Գյումրի', addressCountry: 'AM',
  },
  areaServed: { '@type': 'City', name: 'Gyumri' },
  hasMap: 'https://maps.app.goo.gl/bz44w7t6oa5zqXrK9',
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00', closes: '21:00',
  }],
  potentialAction: {
    '@type': 'ReserveAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://apnt.app/solo_beauty' },
  },
  sameAs: [
    'https://www.instagram.com/solobeauty.gyumri/',
    'https://www.facebook.com/solobeautygyumri',
    'https://t.me/solobeauty',
    'https://yandex.com/maps/org/solo_beauty/1371921405/',
    'https://2gis.am/ru/gyumri/firm/70000001090579585',
  ],
};

export function languageForPath(path) {
  return /^\/ru(?:\/|$)/.test(path) ? 'ru' : 'hy';
}

export function structuredData(language, serviceNames) {
  const page = pages[language];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...business, description: page.description,
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: 'Solo Beauty',
          itemListElement: serviceNames.map((name) => ({
            '@type': 'Offer', itemOffered: {
              '@type': 'Service', name, provider: { '@id': business['@id'] },
              areaServed: { '@type': 'City', name: 'Gyumri' },
            },
          })),
        },
      },
      { '@type': 'WebPage', '@id': `${origin}${page.path}#webpage`,
        url: `${origin}${page.path}`, name: page.title, description: page.description,
        inLanguage: language, about: { '@id': business['@id'] },
      },
    ],
  };
}
