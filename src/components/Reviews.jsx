// src/components/Reviews.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaQuoteLeft, FaGoogle, FaFacebook, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * REAL reviews only.
 *
 * Every entry below is published publicly by the customer on the named
 * platform. Do not add invented testimonials here — fabricated reviews are
 * illegal in most markets and destroy the trust this section exists to build.
 *
 *  - susanna / yelena / sona : published on the salon's own booking profile
 *                              (apnt.app/profile/solo_beauty)
 *
 * To add a review: copy an existing object, add the matching text to the
 * `reviews.items` block in src/i18.js (both `hy` and `ru`), and confirm the
 * customer's star rating on the source platform before setting `rating`.
 */
const reviews = [
  { id: 'susanna', name: 'Susanna Vardanyan',  initials: 'SV', rating: 5, source: 'google' },
  { id: 'yelena',  name: 'Yelena Grigoryan',   initials: 'YG', rating: 5, source: 'google' },
  { id: 'sona',    name: 'Sona Hovhannisyan',  initials: 'SH', rating: 5, source: 'google' },
];

const sourceMeta = {
  google:   { Icon: FaGoogle,   label: 'Google' },
  facebook: { Icon: FaFacebook, label: 'Facebook' },
};

/** Verified aggregates: 4.8 on Google, 40 reviews at 100% recommend on Facebook. */
const stats = [
  { id: 'rating',    value: '4.8',  icon: FaStar },
  { id: 'reviews',   value: '40+',  icon: null },
  { id: 'recommend', value: '100%', icon: null },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${count} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          aria-hidden="true"
          className={i < count ? 'text-pink-500' : 'text-[#3a3a3f]'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="reviews" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.03),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-pink-500">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Aggregate stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-[#18181b] rounded-2xl p-6 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] text-center hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-white">{stat.value}</span>
                {stat.icon && <stat.icon className="text-pink-500 text-2xl" aria-hidden="true" />}
              </div>
              <p className="text-sm text-gray-400 font-medium">
                {t(`reviews.stats.${stat.id}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => {
            const { Icon, label } = sourceMeta[review.source];
            return (
              <figure
                key={review.id}
                className="relative bg-[#18181b] rounded-2xl p-6 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] transition-all duration-300 group flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaQuoteLeft
                  className="text-pink-500/20 text-4xl absolute top-6 right-6 group-hover:text-pink-500/30 transition-colors"
                  aria-hidden="true"
                />

                <div className="mb-4">
                  <Stars count={review.rating} />
                </div>

                <blockquote className="text-gray-300 text-center flex-1 mb-6 relative z-10">
                  {t(`reviews.items.${review.id}`)}
                </blockquote>

                <figcaption className="flex items-center justify-center gap-3 pt-4 border-t border-[#232326] mt-auto">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black text-pink-500 font-bold shadow-[2px_2px_8px_0_rgba(236,72,153,0.15)] flex-shrink-0"
                    aria-hidden="true"
                  >
                    {review.initials}
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold text-white text-sm">{review.name}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Icon aria-hidden="true" />
                      {label}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Leave a review CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">
              {t('reviews.cta.title')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('reviews.cta.description')}
            </p>
            <a
              href="https://maps.app.goo.gl/bz44w7t6oa5zqXrK9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg hover:text-pink-500 hover:shadow-[0_4px_16px_0_rgba(236,72,153,0.3)] transition-all duration-300 border border-[#232326] hover:border-pink-500/30"
            >
              <FaGoogle className="mr-3 text-pink-500" aria-hidden="true" />
              {t('reviews.cta.button')}
              <FaArrowRight className="ml-2 text-pink-500" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
