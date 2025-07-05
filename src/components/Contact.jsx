import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTelegram, FaGlobe, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-16 text-pink-500"
          data-aos="fade-up"
        >
          {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-aos="fade-up" data-aos-delay="100">
          {/* Telegram Bot Booking */}
          <div className="bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] transition-all duration-300 flex flex-col justify-between min-h-[400px]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.15)] mb-6">
                <FaTelegram className="text-pink-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-500">{t('contact.telegramTitle')}</h3>
              <p className="text-gray-300 mb-8 text-lg">
                {t('contact.telegramDesc')}
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://t.me/solo_grancum_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 px-6 bg-black text-white rounded-xl font-semibold text-lg hover:text-pink-500 hover:shadow-[0_4px_16px_0_rgba(236,72,153,0.3)] transition-all duration-300 border border-[#232326] hover:border-pink-500/30"
              >
                <FaCalendarAlt className="mr-3 text-pink-500" />
                {t('contact.telegramBtn')}
                <FaArrowRight className="ml-3 text-pink-500" />
              </a>
            </div>
          </div>

          {/* Online Booking Website */}
          <div className="bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] transition-all duration-300 flex flex-col justify-between min-h-[400px]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.15)] mb-6">
                <FaGlobe className="text-pink-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-500">{t('contact.onlineTitle')}</h3>
              <p className="text-gray-300 mb-8 text-lg">
                {t('contact.onlineDesc')}
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://apnt.app/solo_beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 px-6 bg-black text-white rounded-xl font-semibold text-lg hover:text-pink-500 hover:shadow-[0_4px_16px_0_rgba(236,72,153,0.3)] transition-all duration-300 border border-[#232326] hover:border-pink-500/30"
              >
                <FaCalendarAlt className="mr-3 text-pink-500" />
                {t('contact.onlineBtn')}
                <FaArrowRight className="ml-3 text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-400 text-lg mb-4">
            {t('contact.needHelp')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-pink-500">
            <a href="tel:+(374)-93-000217" className="hover:text-white transition-colors duration-200">
              📞 {t('contact.phone')}
            </a>
            <a href="https://wa.me/37493000217" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              💬 {t('contact.whatsapp')}
            </a>
            <a href="viber://chat?number=+37493000217" className="hover:text-white transition-colors duration-200">
              📱 {t('contact.viber')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
