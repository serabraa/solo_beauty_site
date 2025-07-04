import heroImage from '../assets/solo_logo.png'; // your logo as background

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';


export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen bg-contain bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label={t('home.sectionLabel') || 'Home section'}
    >
      {/* Visually hidden site title for screen readers */}
      <h1 className="sr-only">{t('siteTitle') || 'Solo Beauty'}</h1>

      {/* No overlay */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        data-aos="fade-up"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {t('homet.welcoming')}
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8 drop-shadow">
          {t('homet.introText')}
        </p>
        <a
          href="#services"
          className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:bg-pink-600 transition"
        >
          {t('home.cta') || 'See Our Services'}
        </a>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2">
            <path d="M16 8v16M8 20l8 8 8-8" />
          </svg>
        </div>
      </div>
    </section>
  );
}
