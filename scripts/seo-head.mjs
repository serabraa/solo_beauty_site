import { origin, pages, business, structuredData } from '../src/seo/site.js';
import { serviceUrl } from '../src/seo/services.js';

const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

export function seoHead(language, serviceNames) {
  const page = pages[language];
  const url = origin + page.path;
  const meta = (attribute, name, value) => `<meta ${attribute}="${name}" content="${escape(value)}" />`;
  return [
    `<title>${escape(page.title)}</title>`,
    meta('name', 'description', page.description),
    `<link rel="canonical" href="${url}" />`,
    ...Object.entries(pages).map(([lang, value]) => `<link rel="alternate" hreflang="${lang}" href="${origin}${value.path}" />`),
    `<link rel="alternate" hreflang="x-default" href="${origin}/" />`,
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', business.name),
    meta('property', 'og:url', url),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:locale', page.locale),
    ...Object.entries(pages).filter(([lang]) => lang !== language).map(([, value]) => meta('property', 'og:locale:alternate', value.locale)),
    meta('property', 'og:image', `${origin}/og-image.jpg`),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', 'Solo Beauty Salon'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', `${origin}/og-image.jpg`),
    `<script type="application/ld+json">${JSON.stringify(structuredData(language, serviceNames)).replace(/</g, '\\u003c')}</script>`,
  ].join('\n');
}

export function serviceSeoHead(language, slug, service) {
  const page = service[language];
  const url = origin + serviceUrl(language, slug);
  const alternate = (lang) => origin + serviceUrl(lang, slug);
  const serviceId = `${url}#service`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      business,
      {
        '@type': 'Service', '@id': serviceId, name: page.heading,
        description: page.description, provider: { '@id': business['@id'] },
        areaServed: business.areaServed,
      },
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url,
        name: page.title, description: page.description, inLanguage: language,
        about: { '@id': business['@id'] }, primaryEntity: { '@id': serviceId },
      },
    ],
  };
  const meta = (attribute, name, value) => `<meta ${attribute}="${name}" content="${escape(value)}" />`;
  return [
    `<title>${escape(page.title)}</title>`,
    meta('name', 'description', page.description),
    `<link rel="canonical" href="${url}" />`,
    ...['hy', 'ru'].map((lang) => `<link rel="alternate" hreflang="${lang}" href="${alternate(lang)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${alternate('hy')}" />`,
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', business.name),
    meta('property', 'og:url', url),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:locale', pages[language].locale),
    meta('property', 'og:image', `${origin}/og-image.jpg`),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    `<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, '\\u003c')}</script>`,
  ].join('\n');
}
