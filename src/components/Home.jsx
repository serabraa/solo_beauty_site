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
      className="relative h-screen bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 75%)'
        }}
      />

      {/* manifesto text */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t('test.second')}
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-gray-200">
          {t('home.manifestoText')}
        </p>
      </div>
    </section>
  );
}
