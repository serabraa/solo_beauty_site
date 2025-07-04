import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Contact Info & Social Icons */}
        <div>
          <h4 className="font-semibold mb-2">{t('footer.contactInfo')}</h4>
          <ul className="space-y-1 text-sm text-gray-300 mb-4">
            <li>
              <span className="font-semibold">Tel:</span>
              <a href="tel:033025125" className="hover:text-pink-500 ml-1">033025125</a>,
              <a href="tel:+37453988" className="hover:text-pink-500 ml-1">(+374)53988</a>
            </li>
            <li>
              <span className="font-semibold">WhatsApp:</span>
              <a href="https://wa.me/37493000217" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 ml-1">+37493000217</a>
            </li>
            <li>
              <span className="font-semibold">Viber:</span>
              <a href="viber://chat?number=+37493000217" className="hover:text-pink-500 ml-1">+37493000217</a>
            </li>
            <li>
              <a href={`mailto:${t('footer.email')}`} className="hover:text-pink-500">
                {t('footer.email')}
              </a>
            </li>
          </ul>
          <h4 className="font-semibold mb-2">{t('footer.followUs')}</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.instagram.com/solobeauty.gyumri/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/solobeautygyumri" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaFacebook />
            </a>
            <a href="https://t.me/solobeauty" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Location, Address, Hours, Map */}
        <div>
          <h4 className="font-semibold mb-2">{t('footer.location')}</h4>
          <div>
              <span className="font-semibold">{t('footer.businessHours')}:</span>
              <span className="ml-2">{t('footer.days')}: 09:00 - 21:00</span>
            </div>
          <div className="mb-2">
            <span className="font-semibold">{t('footer.address')}</span>
            <span>{t('footer.addressName')}</span>
          </div>
          <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
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
      <div className="text-center mt-8 text-sm text-gray-500">
        {t('footer.copy', { year })}
      </div>
    </footer>
  );
}

export default Footer;
