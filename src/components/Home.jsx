import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import LogoMark from './LogoMark';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-4rem)] py-12 bg-black flex flex-col items-center justify-center overflow-hidden"
      aria-label={t('home')}
    >
      {/* Visually hidden site title for screen readers */}
      <h1 className="sr-only">{t('siteTitle')}</h1>

      {/* Warm rose light behind the content so the hero isn't flat black */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(254,176,183,0.16),rgba(254,176,183,0.04)_45%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="relative mb-8 flex justify-center">
        <div className="absolute w-64 h-64 rounded-full bg-pink-500 opacity-25 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <LogoMark className="w-40 sm:w-52 relative z-10 mx-auto bg-pink-500 drop-shadow-[0_0_24px_rgba(254,176,183,0.35)]" />
      </div>

      {/* Welcome text — the brand name gets its own line and never wraps */}
      <h2 className="relative px-4 text-[2rem] min-[380px]:text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-500 mb-6 drop-shadow-lg text-center leading-tight" data-aos="fade-up">
        <span className="block">{t('homet.welcoming')}</span>
        <span className="block whitespace-nowrap">Solo Beauty ❤️</span>
      </h2>

      <p className="relative px-4 max-w-xl text-lg sm:text-xl text-gray-200 mb-8 drop-shadow text-center" data-aos="fade-up" data-aos-delay="100">
        {t('homet.introText')}
      </p>

      <a
        href="#services"
        className="relative inline-block px-6 min-[380px]:px-8 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:bg-pink-600 transition text-base min-[380px]:text-lg whitespace-nowrap border-2 border-pink-500/0 hover:border-pink-500"
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
