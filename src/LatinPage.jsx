import React from 'react';
import LogoMark from './components/LogoMark';
import { latinPage } from './seo/latin.js';
import PriceListCard from './components/PriceListCard.jsx';

export default function LatinPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-pink-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 font-semibold text-white" aria-label="Solo Beauty">
            <LogoMark className="h-10 bg-pink-500" /><span>Solo Beauty</span>
          </a>
          <nav aria-label="Language" className="flex gap-5 text-sm">
            <a href="/" hrefLang="hy" className="hover:text-pink-500">Հայերեն</a>
            <a href="/ru/" hrefLang="ru" className="hover:text-pink-500">Русский</a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-6">{latinPage.heading}</h1>
        <p className="text-lg leading-8 text-gray-200 max-w-3xl mb-8">{latinPage.intro}</p>
        <a href="/" className="inline-flex items-center mb-8 text-pink-500 hover:text-pink-400 underline underline-offset-4">Avelin Solo Beauty-i masin →</a>
        <PriceListCard title="Amboghjakan gnacutsak" description="Tesnel bolor tsarayutyunneri gnery" />
        <section aria-label="Tsarayutyunner" className="border-t border-white/20">
          {latinPage.services.map(([name, description, href]) => (
            <div key={name} className="py-8 border-b border-white/20 sm:grid sm:grid-cols-[14rem_minmax(0,1fr)] gap-6">
              <h2 className="text-xl font-semibold text-pink-500 mb-2 sm:mb-0"><a href={href}>{name}</a></h2>
              <p className="text-gray-200 leading-7 max-w-prose">{description}</p>
            </div>
          ))}
        </section>
        <p className="text-gray-300 mt-10">Solo Beauty, Gyumri · <a href="tel:+37493000217" className="text-pink-500">+374 93 000217</a></p>
      </main>
    </div>
  );
}
