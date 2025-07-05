import heroImage from '../assets/solo_logo.png'; // your logo as image

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
      className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
      aria-label={t('home.sectionLabel') || 'Home section'}
    >
      {/* Visually hidden site title for screen readers */}
      <h1 className="sr-only">{t('siteTitle') || 'Solo Beauty'}</h1>

      {/* Logo */}
      <div className="relative mb-8 flex justify-center">
        <div className="absolute w-56 h-56 rounded-full bg-pink-500 opacity-20 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <img
          src={heroImage}
          alt="Solo Beauty Logo"
          className="w-48 h-48 relative z-10 mx-auto"
          draggable="false"
        />
      </div>

      {/* Welcome text */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-500 mb-6 drop-shadow-lg text-center" data-aos="fade-up">
        {t('homet.welcoming')}
      </h2>

      <p className="max-w-xl text-lg sm:text-xl text-gray-200 mb-8 drop-shadow text-center" data-aos="fade-up" data-aos-delay="100">
        {t('homet.introText')}
      </p>

      <a
        href="#services"
        className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:bg-pink-600 transition text-lg border-2 border-pink-500/0 hover:border-pink-500"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {t('homet.services') || 'See Our Services'}
      </a>

      {/* Pink underline accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-pink-500 rounded-full opacity-80" />
    </section>
  );
}
