import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData = [
  { key: 'barber',     emoji: '💇‍♂️', titleKey: 'service.barber',       descriptionKey: 'service.barberDesc' },
  { key: 'wbarber',    emoji: '💇‍♀️', titleKey: 'service.wbarber',       descriptionKey: 'service.wbarberDesc' },
  { key: 'makeup',     emoji: '💄',    titleKey: 'service.makeup',      descriptionKey: 'service.makeupDesc' },
  { key: 'eyes',       emoji: '👁️',    titleKey: 'service.eyes',       descriptionKey: 'service.eyesDesc' },
  { key: 'eyelash',    emoji: '😎',    titleKey: 'service.eyelash',       descriptionKey: 'service.eyelashDesc' },
  { key: 'cosmetology',emoji: '💉', titleKey: 'service.cosmetology',  descriptionKey: 'service.cosmetologyDesc' },
  { key: 'epilation',  emoji: '✨',    titleKey: 'service.epilation',    descriptionKey: 'service.epilationDesc' },
  { key: 'nails',      emoji: '💅',    titleKey: 'service.nails',        descriptionKey: 'service.nailsDesc' },
  { key: 'body',       emoji: '👯‍♀️', titleKey: 'service.body',         descriptionKey: 'service.bodyDesc' },
  
];

export default function Services() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    // Center the first card on mobile after render
    if (window.innerWidth < 640 && scrollRef.current) {
      setTimeout(() => {
        const container = scrollRef.current;
        const firstCard = container.querySelector('div.group');
        if (firstCard) {
          const containerWidth = container.offsetWidth;
          const cardWidth = firstCard.offsetWidth;
          const cardLeft = firstCard.offsetLeft;
          // Center the first card
          const scrollTo = cardLeft - (containerWidth - cardWidth) / 2;
          container.scrollLeft = Math.max(0, scrollTo);
        }
      }, 0);
    }
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -350 : 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-16 bg-black relative overflow-hidden">
      <h2 className="text-3xl text-pink-500 font-semibold text-center mb-12">
        {t('services')}
      </h2>

      {/* Arrows */}
      <button
        aria-label="Scroll left"
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2
                   bg-pink-500 text-white p-4 rounded-full z-20
                   hover:bg-pink-400 transition text-2xl shadow-lg border-2 border-white/10"
      >
        ‹
      </button>
      <button
        aria-label="Scroll right"
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2
                   bg-pink-500 text-white p-4 rounded-full z-20
                   hover:bg-pink-400 transition text-2xl shadow-lg border-2 border-white/10"
      >
        ›
      </button>

      {/* Carousel with vertical padding */}
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto px-6 py-8 scrollbar-hide scroll-smooth touch-pan-x"
      >
        {servicesData.map(({ key, emoji, titleKey, descriptionKey }, i) => (
          <div
            key={key}
            className="group min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] flex-shrink-0 \
                       bg-[#18181b] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 \
                       p-8 flex flex-col relative overflow-hidden border-2 border-transparent hover:border-pink-500 h-full"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Centered radial hover overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.1), transparent)' }} />
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md">
                <span role="img" aria-label={t(titleKey)}>{emoji}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-pink-500 mb-2 text-center relative z-10">
              {t(titleKey)}
            </h3>
            <p className="text-gray-200 flex-1 mb-6 text-center relative z-10 text-base">
              {t(descriptionKey)}
            </p>
            <a
              href="#contact"
              className="mt-auto inline-block w-full text-center py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-400 transition relative z-10 text-lg shadow-md border-2 border-pink-500/0 hover:border-pink-500"
            >
              {t('book')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
