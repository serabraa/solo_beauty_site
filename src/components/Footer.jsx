import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebook, FaTelegram, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Left: Contacts + Socials (merged) */}
        <div className="flex flex-col h-full">
          <div className="flex-1 bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] flex flex-col justify-between items-center text-center">
            <h4 className="text-2xl font-bold mb-6 text-pink-500 flex items-center justify-center">
              <FaEnvelope className="mr-3 text-pink-500" />
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-4 mb-8 w-full">
              <li className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 rounded-xl">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.15)]">
                  <FaPhone className="text-pink-500 text-xl" />
                </span>
                <span className="font-semibold text-white text-lg">Tel:</span>
                <div className="flex flex-wrap gap-3 mt-1 justify-center">
                  <a href="tel:093000217" className="text-white hover:text-pink-500 underline underline-offset-4 transition-colors duration-200 font-medium">093000217</a>
                  <span className="text-gray-600">•</span>
                  <a href="tel:033025125" className="text-white hover:text-pink-500 underline underline-offset-4 transition-colors duration-200 font-medium">033025125</a>
                  <span className="text-gray-600">•</span>
                  <a href="tel:+37453988" className="text-white hover:text-pink-500 underline underline-offset-4 transition-colors duration-200 font-medium">(+374)53988</a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 rounded-xl">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(16,185,129,0.10)]">
                  <FaWhatsapp className="text-pink-500 text-xl" />
                </span>
                <span className="font-semibold text-white text-lg">WhatsApp:</span>
                <a href="https://wa.me/37493000217" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 underline underline-offset-4 transition-colors duration-200 font-medium">+37493000217</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 rounded-xl">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(168,85,247,0.10)]">
                  <SiViber className="text-pink-500 text-xl" />
                </span>
                <span className="font-semibold text-white text-lg">Viber:</span>
                <a href="viber://chat?number=+37493000217" className="text-white hover:text-pink-500 underline underline-offset-4 transition-colors duration-200 font-medium">+37493000217</a>
              </li>
            </ul>
            <div className="w-full">
              <h4 className="text-2xl font-bold mb-6 text-pink-500 text-center">
                {t('footer.followUs')}
              </h4>
              <div className="flex justify-center space-x-6 text-3xl">
                <a href="https://www.instagram.com/solobeauty.gyumri/" target="_blank" rel="noopener noreferrer" title="Instagram" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.15)] text-white hover:text-pink-500 hover:shadow-pink-500/30 transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/solobeautygyumri" target="_blank" rel="noopener noreferrer" title="Facebook" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.10)] text-white hover:text-pink-500 hover:shadow-pink-500/30 transition-all duration-300">
                  <FaFacebook />
                </a>
                <a href="https://t.me/solobeauty" target="_blank" rel="noopener noreferrer" title="Telegram" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.10)] text-white hover:text-pink-500 hover:shadow-pink-500/30 transition-all duration-300">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Address & Map */}
        <div className="flex flex-col gap-8">
          {/* Address & Hours Card */}
          <div className="bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] flex flex-col justify-between">
            <h4 className="text-2xl font-bold mb-6 text-pink-500 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-pink-500" />
              {t('footer.addandhours')}
            </h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-black shadow-inner">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.10)]">
                  <FaClock className="text-pink-500 text-xl" />
                </span>
                <span className="text-lg font-semibold text-white ml-2">{t('footer.days')}: 09:00 - 21:00</span>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-black shadow-inner">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black shadow-[2px_2px_8px_0_rgba(236,72,153,0.10)]">
                  <FaMapMarkerAlt className="text-pink-500 text-xl" />
                </span>
                <span className="text-lg font-semibold text-white ml-2">{t('footer.addressName')}</span>
              </div>
            </div>
          </div>
          {/* Map Card */}
          <div className="bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] flex flex-col justify-between">
            <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-xl border-2 border-[#232326] mb-4">
              <iframe
                title="BeautySalon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8653184642017!2d43.84193107621848!3d40.78697497138242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8c8f613d09%3A0xe1f116261d248e43!2zU29sbyBCZWF1dHkgU2Fsb24gR3l1bXJpINSz1bXVuNaC1bTWgNWrINWj1aXVstWl1oHVr9W41oLVqdW11aHVtiDVvdaA1aHVsCBTb2xvIEJlYXV0eSBTdHVkaW8gR3l1bXJpINWs1aHVvtWh1aPVuNaC1bXVtiDVo9Wl1bLVpdaB1a_VuNaC1anVtdWh1bYg1b3WgNWh1bDVqCDUs9W11bjWgtW01oDVq9W41oLVtA!5e0!3m2!1sen!2sus!4v1750380393116!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-full"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/bz44w7t6oa5zqXrK9" // Replace with actual Google Maps link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-400 transition text-lg shadow-md border-2 border-pink-500/0 hover:border-pink-500"
            >
              {t('footer.getDirections') || 'Get Directions'}
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-[#232326]">
        <p className="text-sm text-gray-400 font-medium">
          {t('footer.copy', { year })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
