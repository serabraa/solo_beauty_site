// src/components/Pricing.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

export default function Pricing() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-6">
        {t('pricing💲💲💲')}
      </h2>

      {/* ...your existing grid of cards... */}

      <div className="text-center mt-8">
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          {t('pricing.viewFull')}
        </button>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <iframe
          title="Full Price List"
          src="https://heyzine.com/flip-book/97ec891915.html"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        />
      </Modal>
    </section>
  );
}
