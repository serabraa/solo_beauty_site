// src/components/Reviews.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaGoogle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ------------------------------------------------------------------ *
 * PLATFORMS — verified aggregate ratings. Re-check periodically;
 * these are public claims and must match what each platform shows.
 * ------------------------------------------------------------------ */
const platforms = [
  { id: 'google', name: 'Google', rating: '4.8', url: 'https://maps.app.goo.gl/bz44w7t6oa5zqXrK9', brand: '#4285F4' },
  { id: 'yandex', name: 'Yandex', rating: '5.0', url: 'https://yandex.com/maps/org/solo_beauty/1371921405/', brand: '#FC3F1D' },
  // wordmark: the brand mark already spells the name, so don't print it twice
  { id: '2gis',   name: '2GIS',   rating: '4.9', url: 'https://2gis.am/ru/gyumri/firm/70000001090579585', brand: '#19AA1E', wordmark: true },
];

/* ------------------------------------------------------------------ *
 * REVIEWS — real, published customer reviews, quoted verbatim in the
 * language each customer wrote in.
 *
 * Reviewers are identified by initials only. Do NOT add full names:
 * anything stored here ships in the public JS bundle, so a name kept
 * "just in the data" is still exposed.
 *
 * Never invent a review. Fabricated testimonials are illegal in most
 * markets and destroy the trust this section exists to build.
 * ------------------------------------------------------------------ */
const reviews = [
  { id: 'r1',  initials: 'L.S.', rating: 5, source: 'yandex', lang: 'en',
    text: 'I prefer Solo, the best beauty salon in Gyumri, the best service provided by professional masters ❤️' },
  { id: 'r2',  initials: 'H.S.', rating: 5, source: '2gis', lang: 'hy',
    text: 'Հրաշք միջավայր, պրոֆեսիոնալ թիմ, յուրովի մոտեցում յուրաքանչյուր հաճախորդին... Ընտի՜ր 👌' },
  { id: 'r3',  initials: 'A.P.', rating: 5, source: '2gis', lang: 'ru',
    text: 'Самый лучший салон в Гюмри, с самыми профессиональными и внимательными мастерами. Всем рекомендую!' },
  { id: 'r4',  initials: 'L.H.', rating: 5, source: 'yandex', lang: 'en',
    text: 'The beauty salon where you always feel like home!' },
  { id: 'r5',  initials: 'A.U.', rating: 5, source: '2gis', lang: 'hy',
    text: 'Ամենագեղեցիկ մատնահարդարումը, որ երբևէ ունեցել եմ ❤️' },
  { id: 'r6',  initials: 'A.B.', rating: 5, source: '2gis', lang: 'ru',
    text: 'Атмосфера класса люкс, обслуживание люкс, работают все профессиональные мастера, всегда приятно находиться в Solo ❤️' },
  { id: 'r7',  initials: 'A.K.', rating: 5, source: 'yandex', lang: 'en',
    text: 'The best in Gyumri 👍🏻' },
  { id: 'r8',  initials: 'E.G.', rating: 5, source: '2gis', lang: 'ru',
    text: 'Приятная атмосфера, вежливый персонал и качественное обслуживание. Работа выполнена аккуратно и профессионально.' },
  { id: 'r9',  initials: 'N.B.', rating: 5, source: '2gis', lang: 'hy',
    text: 'Հրաշալի ու պրոֆեսիոնալ թիմ է աշխատում ❤️' },
  { id: 'r10', initials: 'S.V.', rating: 5, source: '2gis', lang: 'ru',
    text: 'Такой маникюр поднимает настроение на всю неделю! Спасибо SOLO 💅' },
  { id: 'r11', initials: 'L.L.', rating: 5, source: '2gis', lang: 'en',
    text: "Five stars isn't enough for Solo. Flawless service from the moment you walk in. Professional, talented, and incredibly welcoming." },
  { id: 'r12', initials: 'A.A.', rating: 5, source: '2gis', lang: 'hy',
    text: 'Հիանալի գեղեցկության սրահ շատ բարեհամբույր անձնակազմով։' },

  /* Google reviews go here — see note in the section below. Example shape:
     { id: 'g1', initials: 'X.Y.', rating: 5, source: 'google', lang: 'ru', text: '…' }, */
];

/* react-icons has no Yandex or 2GIS glyph — small brand marks instead of fake logos. */
function PlatformMark({ id, brand }) {
  if (id === 'google') return <FaGoogle style={{ color: brand }} aria-hidden="true" />;
  if (id === 'yandex') {
    return (
      <span
        className="inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px] font-bold leading-none"
        style={{ backgroundColor: brand }}
        aria-hidden="true"
      >
        Я
      </span>
    );
  }
  return (
    <span className="text-[11px] font-extrabold tracking-tight" style={{ color: brand }} aria-hidden="true">
      2GIS
    </span>
  );
}

function ReviewCard({ review }) {
  const platform = platforms.find((p) => p.id === review.source);
  return (
    <figure className="w-[280px] sm:w-[320px] flex-shrink-0">
      <a
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full bg-[#18181b] rounded-2xl p-6 border border-[#232326] hover:border-pink-500/40 transition-colors duration-300 flex flex-col"
      >
        <div className="flex items-center gap-1 mb-4" aria-label={`${review.rating} / 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} aria-hidden="true" className={i < review.rating ? 'text-pink-500 text-sm' : 'text-[#3a3a3f] text-sm'} />
          ))}
        </div>

        <blockquote lang={review.lang} className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
          {review.text}
        </blockquote>

        <figcaption className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <span>{review.initials}</span>
          <span aria-hidden="true">·</span>
          <PlatformMark id={platform.id} brand={platform.brand} />
          {platform.wordmark
            ? <span className="sr-only">{platform.name}</span>
            : <span>{platform.name}</span>}
        </figcaption>
      </a>
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center px-6 mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-pink-500 mb-3">{t('reviews.title')}</h2>
          <p className="text-gray-400">{t('reviews.subtitle')}</p>
        </div>

        {/* Ratings strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-10 px-6"
          data-aos="fade-up"
        >
          {platforms.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-pink-500 transition-colors"
            >
              <PlatformMark id={p.id} brand={p.brand} />
              {p.wordmark
                ? <span className="sr-only">{p.name}</span>
                : <span className="text-sm">{p.name}</span>}
              <span className="text-lg font-bold text-white">{p.rating}</span>
              <FaStar className="text-pink-500 text-sm" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Auto-scrolling carousel */}
        <div
          className="relative overflow-hidden group/marquee motion-reduce:overflow-x-auto mb-10
                     [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
                     [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div
            className="flex w-max gap-8 py-2 animate-[reviews-marquee_var(--reviews-marquee-duration,80s)_linear_infinite]
                       group-hover/marquee:[animation-play-state:paused]
                       focus-within:[animation-play-state:paused]
                       motion-reduce:animate-none"
          >
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

        {/* Leave a review */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 text-sm" data-aos="fade-up">
          <span className="text-gray-400">{t('reviews.cta.title')}</span>
          {platforms.map((p, i) => (
            <React.Fragment key={p.id}>
              {i > 0 && <span className="text-gray-700" aria-hidden="true">·</span>}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-white underline underline-offset-4 transition-colors font-medium"
              >
                {p.name}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
