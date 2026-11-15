import React from 'react';
import LogoMark from './components/LogoMark';
import { business } from './seo/site.js';
import { serviceOverviews } from './seo/services.js';
import PriceListCard from './components/PriceListCard.jsx';

export default function ServicePage({ language }) {
  const copy = serviceOverviews[language];
  const home = language === 'hy' ? '/' : '/ru/';
  const other = language === 'hy' ? 'ru' : 'hy';
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-pink-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href={home} className="flex items-center gap-3 font-semibold text-white" aria-label="Solo Beauty">
            <LogoMark className="h-10 bg-pink-500" /><span>Solo Beauty</span>
          </a>
          <nav aria-label="Language" className="flex gap-5 text-sm">
            <a href={serviceOverviews[other].path} hrefLang={other} className="hover:text-pink-500">{other === 'hy' ? 'Հայերեն' : 'Русский'}</a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-6">{copy.heading}</h1>
        <p className="text-lg text-gray-200 max-w-3xl mb-8">{copy.intro}</p>
        <div className="flex flex-wrap gap-4 mb-8">
          <a href={business.potentialAction.target.urlTemplate} className="inline-flex items-center px-5 py-3 bg-pink-500 text-black font-semibold rounded-md hover:bg-pink-400">{copy.booking}</a>
          <a href="tel:+37493000217" className="inline-flex items-center px-5 py-3 border border-pink-500 text-white rounded-md hover:text-pink-500">{copy.contact}</a>
        </div>
        <PriceListCard title={copy.priceList} description={copy.priceListDescription} />
        <section aria-label={copy.servicesLabel} className="border-t border-white/20">
          {copy.services.map(([name, description]) => (
            <div key={name} className="py-7 border-b border-white/20 sm:grid sm:grid-cols-[12rem_1fr] gap-6">
              <h2 className="text-xl font-semibold text-pink-500 mb-2 sm:mb-0">{name}</h2>
              <p className="text-gray-200">{description}</p>
            </div>
          ))}
        </section>
        <p className="text-gray-300 mt-10">Solo Beauty, {language === 'hy' ? 'Գյումրի' : 'Гюмри'} · <a href="tel:+37493000217" className="text-pink-500">+374 93 000217</a></p>
      </main>
    </div>
  );
}
