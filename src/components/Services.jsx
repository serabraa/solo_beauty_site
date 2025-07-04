import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData = [
  { key: 'barber',     emoji: '💇‍♂️', titleKey: 'service.barber',       descriptionKey: 'service.barberDesc' },
  { key: 'wbarber',    emoji: '💇‍♀️', titleKey: 'service.wbarber',       descriptionKey: 'service.wbarberDesc' },
  { key: 'makeup',     emoji: '💄',    titleKey: 'service.makeup',      descriptionKey: 'service.makeupDesc' },
  { key: 'eyes',       emoji: '👁️👄👁️',    titleKey: 'service.eyes',       descriptionKey: 'service.eyesDesc' },
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
    <section id="services" className="py-16 bg-white relative">
      <h2 className="text-3xl text-black font-semibold text-center mb-12">
        {t('services')}
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2
                   bg-[#feb0b7] text-white p-3 rounded-full z-20
                   hover:bg-[#e699a2] transition"
      >
        ‹
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2
                   bg-[#feb0b7] text-white p-3 rounded-full z-20
                   hover:bg-[#e699a2] transition"
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
                       bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 \
                       p-6 flex flex-col relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Centered radial hover overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.1), transparent)' }} />
            <div className="text-7xl mb-4 text-center relative z-10">{emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center relative z-10">
              {t(titleKey)}
            </h3>
            <p className="text-gray-600 flex-1 mb-4 text-center relative z-10">
              {t(descriptionKey)}
            </p>
            <a
              href="#contact"
              className="mt-auto inline-block w-full text-center py-2 bg-[#feb0b7] text-white rounded-lg font-medium hover:bg-[#e699a2] transition relative z-10"
            >
              {t('book')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
