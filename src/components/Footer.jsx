import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Contact Info & Social Icons */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-500 border-b border-pink-500 pb-2">
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center space-x-3 hover:bg-gray-900 p-3 rounded-lg transition-colors duration-200">
                <span className="font-semibold text-white min-w-[60px]">Tel:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="tel:033025125" className="text-white hover:text-pink-500 transition-colors duration-200 font-medium">033025125</a>
                  <span className="text-gray-500">|</span>
                  <a href="tel:+37453988" className="text-white hover:text-pink-500 transition-colors duration-200 font-medium">(+374)53988</a>
                </div>
              </li>
              <li className="flex items-center space-x-3 hover:bg-gray-900 p-3 rounded-lg transition-colors duration-200">
                <span className="font-semibold text-white min-w-[80px]">WhatsApp:</span>
                <a href="https://wa.me/37493000217" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors duration-200 font-medium">+37493000217</a>
              </li>
              <li className="flex items-center space-x-3 hover:bg-gray-900 p-3 rounded-lg transition-colors duration-200">
                <span className="font-semibold text-white min-w-[60px]">Viber:</span>
                <a href="viber://chat?number=+37493000217" className="text-white hover:text-pink-500 transition-colors duration-200 font-medium">+37493000217</a>
              </li>
              <li className="flex items-center space-x-3 hover:bg-gray-900 p-3 rounded-lg transition-colors duration-200">
                <span className="font-semibold text-white min-w-[60px]">Email:</span>
                <a href={`mailto:${t('footer.email')}`} className="text-white hover:text-pink-500 transition-colors duration-200 font-medium">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-500 border-b border-pink-500 pb-2">
              {t('footer.followUs')}
            </h4>
            <div className="flex space-x-6 text-3xl">
              <a href="https://www.instagram.com/solobeauty.gyumri/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/solobeautygyumri" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                <FaFacebook />
              </a>
              <a href="https://t.me/solobeauty" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

{/* Location, Address, Hours, Map */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-500 border-b border-pink-500 pb-2">
              {t('footer.location')}
            </h4>
            <div className="space-y-4 text-gray-200">
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-pink-500">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-white">{t('footer.businessHours')}:</span>
                </div>
                <div className="text-lg font-medium">
                  {t('footer.days')}: <span className="text-pink-500">09:00 - 21:00</span>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-pink-500">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-white">{t('footer.address')}</span>
                </div>
                <div className="text-lg font-medium text-white">
                  {t('footer.addressName')}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-2xl border-2 border-gray-700">
            <iframe
              title="BeautySalon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8653184642017!2d43.84193107621848!3d40.78697497138242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8c8f613d09%3A0xe1f116261d248e43!2zU29sbyBCZWF1dHkgU2Fsb24gR3l1bXJpINSz1bXVuNaC1bTWgNWrINWj1aXVstWl1oHVr9W41oLVqdW11aHVtiDVvdaA1aHVsCBTb2xvIEJlYXV0eSBTdHVkaW8gR3l1bXJpINWs1aHVvtWh1aPVuNaC1bXVtiDVo9Wl1bLVpdaB1a_VuNaC1anVtdWh1bYg1b3WgNWh1bDVqCDUs9W11bjWgtW01oDVq9W41oLVtA!5e0!3m2!1sen!2sus!4v1750380393116!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-gray-700">
        <p className="text-sm text-gray-400 font-medium">
          {t('footer.copy', { year })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
