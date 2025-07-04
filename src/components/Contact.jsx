import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="py-16 bg-white">
      <h2
        className="text-3xl font-semibold text-center mb-12"
        data-aos="fade-up"
      >
        {t('contact.title')}
      </h2>

      <div className="max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <form
          action="#"
          className="grid grid-cols-1 gap-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-black">
              {t('contact.name')}
            </label>
            <input
              id="name"
              type="text"
              placeholder={t('contact.namePlaceholder')}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-black">
              {t('contact.email')}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t('contact.emailPlaceholder')}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium text-black">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder={t('contact.messagePlaceholder')}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('contact.send')}
          </button>
        </form>
      </div>
    </section>
  );
}
