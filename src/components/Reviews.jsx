// src/components/Reviews.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaQuoteLeft, FaGoogle, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ------------------------------------------------------------------ *
 * PLATFORMS — verified aggregate ratings.
 * Re-check these periodically; they are claims about the business and
 * must match what the platform actually shows.
 * ------------------------------------------------------------------ */
const platforms = [
  {
    id: 'google',
    name: 'Google',
    rating: '4.8',
    countKey: 'reviews.platforms.googleCount',
    url: 'https://maps.app.goo.gl/bz44w7t6oa5zqXrK9',
    brand: '#4285F4',
  },
  {
    id: 'yandex',
    name: 'Yandex',
    rating: '5.0',
    countKey: 'reviews.platforms.yandexCount',
    url: 'https://yandex.com/maps/org/solo_beauty/1371921405/',
    brand: '#FC3F1D',
  },
  {
    id: '2gis',
    name: '2GIS',
    rating: '4.9',
    countKey: 'reviews.platforms.gisCount',
    url: 'https://2gis.am/ru/gyumri/firm/70000001090579585',
    brand: '#19AA1E',
  },
];

/* ------------------------------------------------------------------ *
 * REVIEWS — real, published customer reviews, quoted in the language
 * the customer actually wrote in. Never translate a quote and never
 * invent one: fabricated reviews are illegal in most markets and
 * destroy the trust this section exists to build.
 *
 * `source` must name the platform the review is actually published on.
 * `lang`   is the language of the quote (drives the lang="" attribute).
 * To add one: copy the entry, paste the text verbatim from the source.
 * ------------------------------------------------------------------ */
const reviews = [
  {
    id: 'lusine-lee', name: 'Lusine Lee', initials: 'LL', rating: 5, source: '2gis', lang: 'en',
    text: "Five stars isn't enough for Solo. Flawless service from the moment you walk in. Professional, talented, and incredibly welcoming.",
  },
  {
    id: 'hripsime', name: 'Hripsime Soghomonyan', initials: 'HS', rating: 5, source: '2gis', lang: 'hy',
    text: 'Հրաշք միջավայր, պրոֆեսիոնալ թիմ, յուրովի մոտեցում յուրաքանչյուր հաճախորդին... Ընտի՜ր 👌',
  },
  {
    id: 'armine', name: 'Արմինե Պետրոսյան', initials: 'ԱՊ', rating: 5, source: '2gis', lang: 'ru',
    text: 'Самый лучший салон в Гюмри, с самыми профессиональными и внимательными мастерами. Всем рекомендую!',
  },
  {
    id: 'apple-user', name: 'Apple User', initials: 'AU', rating: 5, source: '2gis', lang: 'hy',
    text: 'Ամենագեղեցիկ մատնահարդարումը, որ երբևէ ունեցել եմ ❤️',
  },
  {
    id: 'adelina', name: 'Adelina Balasanyan', initials: 'AB', rating: 5, source: '2gis', lang: 'ru',
    text: 'Атмосфера класса люкс, обслуживание люкс, работают все профессиональные мастера, всегда приятно находиться в Solo ❤️',
  },
  {
    id: 'el-g', name: 'El G', initials: 'EG', rating: 5, source: '2gis', lang: 'ru',
    text: 'Приятная атмосфера, вежливый персонал и качественное обслуживание. Мастер внимательно выслушал все пожелания, работа выполнена аккуратно и профессионально.',
  },
  {
    id: 'nelli', name: 'Nelli Barsexyan', initials: 'NB', rating: 5, source: '2gis', lang: 'hy',
    text: 'Հրաշալի ու պրոֆեսիոնալ թիմ է աշխատում ❤️',
  },
  {
    id: 'susanna', name: 'Susanna Vardanyan', initials: 'SV', rating: 5, source: '2gis', lang: 'ru',
    text: 'Такой маникюр поднимает настроение на всю неделю! Спасибо SOLO 💅',
  },
  {
    id: 'narine', name: 'Narine', initials: 'N', rating: 5, source: '2gis', lang: 'ru',
    text: 'Аракся очень хороший мастер, работа чудесная. Атмосфера вообще супер. Все было очень хорошо ❤️',
  },
  {
    id: 'arpi', name: 'Arpi Antanyan', initials: 'AA', rating: 5, source: '2gis', lang: 'hy',
    text: 'Հիանալի գեղեցկության սրահ շատ բարեհամբույր անձնակազմով։',
  },
  {
    id: 'lusine-s', name: 'Lusine Sanoyan', initials: 'LS', rating: 5, source: '2gis', lang: 'en',
    text: 'The best beauty salon in Gyumri. The best service in Gyumri.',
  },
  {
    id: 'hrant', name: 'Hrant', initials: 'H', rating: 5, source: '2gis', lang: 'ru',
    text: 'Прекрасный салон красоты, где работают профессионалы.',
  },
];

/* Small brand marks — react-icons has no Yandex or 2GIS glyph. */
function PlatformMark({ id, brand }) {
  if (id === 'google') return <FaGoogle style={{ color: brand }} aria-hidden="true" />;
  if (id === 'yandex') {
    return (
      <span
        className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold leading-none"
        style={{ backgroundColor: brand }}
        aria-hidden="true"
      >
        Я
      </span>
    );
  }
  return (
    <span className="text-xs font-extrabold tracking-tight" style={{ color: brand }} aria-hidden="true">
      2GIS
    </span>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${count} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} aria-hidden="true" className={i < count ? 'text-pink-500' : 'text-[#3a3a3f]'} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const platform = platforms.find((p) => p.id === review.source);
  return (
    <figure className="relative w-[280px] sm:w-[340px] flex-shrink-0 bg-[#18181b] rounded-2xl p-6 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] transition-all duration-300 group flex flex-col">
      <FaQuoteLeft
        className="text-pink-500/20 text-3xl absolute top-5 right-5 group-hover:text-pink-500/30 transition-colors pointer-events-none"
        aria-hidden="true"
      />

      <div className="mb-4">
        <Stars count={review.rating} />
      </div>

      <blockquote lang={review.lang} className="text-gray-300 text-center text-sm flex-1 mb-6">
        {review.text}
      </blockquote>

      <figcaption className="flex items-center justify-center gap-3 pt-4 border-t border-[#232326] mt-auto">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black text-pink-500 font-bold text-sm shadow-[2px_2px_8px_0_rgba(236,72,153,0.15)] flex-shrink-0"
          aria-hidden="true"
        >
          {review.initials}
        </span>
        <span className="text-left min-w-0">
          <span className="block font-semibold text-white text-sm truncate">{review.name}</span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <PlatformMark id={platform.id} brand={platform.brand} />
            {platform.name}
          </span>
        </span>
      </figcaption>
    </figure>
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

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 max-w-7xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-pink-500">{t('reviews.title')}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('reviews.subtitle')}</p>
        </div>

        {/* Platform ratings */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto px-6">
          {platforms.map((p, index) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#18181b] rounded-2xl p-6 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] text-center hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] hover:border-pink-500/30 transition-all duration-300 block"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="flex items-center justify-center gap-2 mb-3 h-5">
                <PlatformMark id={p.id} brand={p.brand} />
                <span className="text-sm font-semibold text-gray-300">{p.name}</span>
              </span>
              <span className="flex items-center justify-center gap-2 mb-1">
                <span className="text-4xl font-bold text-white">{p.rating}</span>
                <FaStar className="text-pink-500 text-2xl" aria-hidden="true" />
              </span>
              <span className="block text-sm text-gray-400 font-medium">{t(p.countKey)}</span>
            </a>
          ))}
        </div>

        {/* Auto-scrolling review carousel */}
        <div
          className="relative overflow-hidden group/marquee motion-reduce:overflow-x-auto mb-16
                     [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
                     [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          data-aos="fade-up"
        >
          <div
            className="flex w-max gap-8 py-2 animate-[reviews-marquee_var(--reviews-marquee-duration,80s)_linear_infinite]
                       group-hover/marquee:[animation-play-state:paused]
                       focus-within:[animation-play-state:paused]
                       motion-reduce:animate-none"
          >
            {/* Original set */}
            <div className="flex gap-8">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
            {/* Seamless duplicate — hidden from assistive tech so quotes aren't read twice */}
            <div className="flex gap-8" aria-hidden="true">
              {reviews.map((r) => (
                <ReviewCard key={`${r.id}-clone`} review={r} />
              ))}
            </div>
          </div>
        </div>

        {/* Leave a review CTA */}
        <div className="text-center max-w-7xl mx-auto px-6" data-aos="fade-up">
          <div className="bg-[#18181b] rounded-2xl p-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.7)] border border-[#232326] max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">{t('reviews.cta.title')}</h3>
            <p className="text-gray-300 mb-6">{t('reviews.cta.description')}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {platforms.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:text-pink-500 hover:shadow-[0_4px_16px_0_rgba(236,72,153,0.3)] transition-all duration-300 border border-[#232326] hover:border-pink-500/30"
                >
                  <PlatformMark id={p.id} brand={p.brand} />
                  {p.name}
                  <FaArrowRight className="text-pink-500 text-sm" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
