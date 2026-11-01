import React from 'react';
import LogoMark from './components/LogoMark';
import { business, origin } from './seo/site.js';
import { servicePages, serviceUrl } from './seo/services.js';

export default function ServicePage({ language, slug }) {
  const copy = servicePages[slug][language];
  const otherLanguage = language === 'hy' ? 'ru' : 'hy';
  const otherService = slug === 'hair-coloring' ? 'manicure-pedicure' : 'hair-coloring';
  const home = language === 'hy' ? '/' : '/ru/';
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-pink-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href={home} aria-label="Solo Beauty" className="flex items-center gap-3 font-semibold text-white">
            <LogoMark className="h-10 bg-pink-500" />
            <span>Solo Beauty</span>
          </a>
          <nav className="flex items-center gap-5 text-sm">
            <a href={`${home}#services`} className="hidden sm:inline hover:text-pink-500">{copy.services}</a>
            <a href={serviceUrl(otherLanguage, slug)} hrefLang={otherLanguage} className="hover:text-pink-500">{otherLanguage.toUpperCase()}</a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <a href={home} className="hover:text-pink-500">{copy.home}</a>
          <span aria-hidden="true"> / </span>
          <span>{copy.heading}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-6">{copy.heading}</h1>
        <p className="text-lg text-gray-200 max-w-3xl mb-8">{copy.intro}</p>
        <div className="flex flex-wrap gap-4 mb-14">
          <a href={business.potentialAction.target.urlTemplate} className="inline-flex items-center px-5 py-3 bg-pink-500 text-black font-semibold rounded-md hover:bg-pink-400">{copy.booking}</a>
          <a href="tel:+37493000217" className="inline-flex items-center px-5 py-3 border border-pink-500 text-white rounded-md hover:text-pink-500">{copy.contact}</a>
        </div>
        <section aria-label={copy.services} className="border-t border-white/20">
          {copy.details.map(([heading, description]) => (
            <div key={heading} className="py-7 border-b border-white/20 sm:grid sm:grid-cols-[12rem_1fr] gap-6">
              <h2 className="text-xl font-semibold text-pink-500 mb-2 sm:mb-0">{heading}</h2>
              <p className="text-gray-200">{description}</p>
            </div>
          ))}
        </section>
        <section className="py-12 border-b border-white/20">
          <h2 className="text-xl font-semibold text-pink-500 mb-4">{copy.location}</h2>
          <address className="not-italic text-gray-200">{language === 'hy' ? 'Ռիժկովի փողոց 3/1, Գյումրի' : 'ул. Рыжкова 3/1, Гюмри'}</address>
          <p className="text-gray-300 mt-2">{copy.hours}</p>
          <a href={business.hasMap} className="inline-block mt-4 text-pink-500 underline underline-offset-4">{copy.directions}</a>
        </section>
        <nav aria-label={copy.services} className="pt-8">
          <a href={serviceUrl(language, otherService)} className="text-pink-500 underline underline-offset-4">{copy.related}</a>
        </nav>
      </main>
      <footer className="border-t border-white/20 py-6 px-6 text-center text-sm text-gray-400">
        <a href={origin} className="hover:text-pink-500">Solo Beauty</a>
        <span className="mx-3">·</span>
        <a href="tel:+37493000217" className="hover:text-pink-500">+374 93 000217</a>
      </footer>
    </div>
  );
}
