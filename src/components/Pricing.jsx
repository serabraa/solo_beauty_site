// src/components/Pricing.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaTimes, FaStar, FaCheck, FaArrowRight } from 'react-icons/fa';
import Modal from './Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const popularServices = [
    {
      name: t('pricing.services.hairdressing.name'),
      price: "1000-10000",
      currency: "֏",
      description: t('pricing.services.hairdressing.description'),
      features: [
        t('pricing.services.hairdressing.features.consultation'),
        t('pricing.services.hairdressing.features.products'),
        t('pricing.services.hairdressing.features.results')
      ],
      popular: true
    },
    {
      name: t('pricing.services.makeup.name'),
      price: "2000-15000",
      currency: "֏",
      description: t('pricing.services.makeup.description'),
      features: [
        t('pricing.services.makeup.features.quality'),
        t('pricing.services.makeup.features.results'),
        t('pricing.services.makeup.features.natural')
      ],
      popular: false
    },
    {
      name: t('pricing.services.eyelashes.name'),
      price: "2000-20000",
      currency: "֏",
      description: t('pricing.services.eyelashes.description'),
      features: [
        t('pricing.services.eyelashes.features.natural'),
        t('pricing.services.eyelashes.features.results'),
        t('pricing.services.eyelashes.features.comfort')
      ],
      popular: false
    },
    {
      name: t('pricing.services.nails.name'),
      price: "2000-10000",
      currency: "֏",
      description: t('pricing.services.nails.description'),
      features: [
        t('pricing.services.nails.features.tools'),
        t('pricing.services.nails.features.materials'),
        t('pricing.services.nails.features.results')
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.03),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-pink-500">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Popular Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {popularServices.map((service, index) => (
            <div
              key={index}
              className={`relative bg-[#18181b] rounded-2xl p-6 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] transition-all duration-300 group flex flex-col h-full ${service.popular ? 'ring-2 ring-pink-500/50' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FaStar className="mr-1" />
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}
              
              <div className="text-center flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-pink-500 group-hover:text-pink-400 transition-colors">
                  {service.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    {service.price}
                  </span>
                  <span className="text-lg text-gray-400 ml-1">{service.currency}</span>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6 min-h-[96px]">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <FaCheck className="text-pink-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:text-pink-500 hover:shadow-[0_4px_16px_0_rgba(236,72,153,0.3)] transition-all duration-300 border border-[#232326] hover:border-pink-500/30 flex items-center justify-center mt-auto">
                  {t('pricing.bookNow')}
                  <FaArrowRight className="ml-2 text-pink-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Price List Button */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">
              {t('pricing.fullPriceList.title')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('pricing.fullPriceList.description')}
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg hover:text-pink-500 hover:shadow-[0_4px_16px_0_rgba(236,72,153,0.3)] transition-all duration-300 border border-[#232326] hover:border-pink-500/30"
            >
              <FaEye className="mr-3 text-pink-500" />
              {t('pricing.fullPriceList.button')}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Full Price List */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="relative w-full h-full bg-white">
          <iframe
            title="Full Price List"
            src="https://heyzine.com/flip-book/97ec891915.html"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Modal>
    </section>
  );
}
