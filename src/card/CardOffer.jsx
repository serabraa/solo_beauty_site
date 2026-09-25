// src/card/CardOffer.jsx
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import logo from '../assets/solo_logo.png';

const languages = [
  { code: 'hy', label: 'Հայ' },
  { code: 'ru', label: 'РУ' },
];

/* The logo PNG is dark ink on transparency, so it's used as a mask and
   filled with the brand colour — it would vanish on black otherwise. */
function LogoMark({ className }) {
  const mask = `url(${logo}) center / contain no-repeat`;
  return <span className={className} style={{ WebkitMask: mask, mask }} aria-hidden="true" />;
}

function LanguageSwitcher({ onSwitch }) {
  const { t, i18n } = useTranslation();
  return (
    <div role="group" aria-label={t('cardOffer.languageLabel')} className="offer-lang">
      {languages.map((lang) => {
        const active = i18n.resolvedLanguage === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            lang={lang.code}
            aria-pressed={active}
            onClick={() => {
              onSwitch();
              i18n.changeLanguage(lang.code);
            }}
            className={active ? 'is-active' : undefined}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}

export default function CardOffer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;

  // Keep <html lang> and the tab title in step with the chosen language —
  // lang drives font selection, hyphenation and screen-reader voice.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t('cardOffer.pageTitle');
  }, [lang, t]);

  // Text blocks are keyed by language so they re-mount and cross-fade on a
  // switch. Once the user has switched, the entrance delays must not replay.
  const [settled, setSettled] = useState(false);

  const terms = t('cardOffer.terms', { returnObjects: true });

  return (
    <div className={`offer-page${settled ? ' is-settled' : ''}`}>
      <div className="offer-glow" aria-hidden="true" />

      <header className="offer-header">
        <a href="/" aria-label="Solo Beauty" className="offer-anim offer-anim--logo">
          <LogoMark className="offer-logo" />
        </a>
        <LanguageSwitcher onSwitch={() => setSettled(true)} />
      </header>

      <main className="offer-main">
        <div key={`intro-${lang}`} className="offer-intro offer-anim offer-anim--text offer-swap">
          <p className="offer-eyebrow">{t('cardOffer.label')}</p>
          <h1 className="offer-congrats">{t('cardOffer.congratsTitle')}</h1>
          <p className="offer-congrats-text">{t('cardOffer.congratsText')}</p>
        </div>

        {/* The digital card */}
        <div className="offer-card-stage">
          <div className="offer-card offer-anim offer-anim--card">
            <LogoMark className="offer-card-watermark" />

            <div className="offer-card-top">
              <LogoMark className="offer-card-logo" />
              <span key={`name-${lang}`} className="offer-card-name offer-swap">
                {t('cardOffer.cardName')}
              </span>
            </div>

            <div className="offer-card-value">
              <span className="offer-percent offer-anim offer-anim--percent">
                30<span className="offer-percent-sign">%</span>
              </span>
              <span key={`off-${lang}`} className="offer-off offer-swap">
                {t('cardOffer.off')}
              </span>
            </div>

            <div className="offer-card-bottom">
              <span className="offer-card-brand">Solo Beauty</span>
            </div>

            <span className="offer-card-shine" aria-hidden="true" />
          </div>
        </div>

        <div key={`copy-${lang}`} className="offer-copy offer-anim offer-anim--text offer-swap">
          <span className="offer-rule" aria-hidden="true" />
          <p className="offer-validity">
            <Trans i18nKey="cardOffer.validity" components={{ hl: <span className="offer-hl" /> }} />
          </p>
        </div>
      </main>

      <footer key={`terms-${lang}`} className="offer-terms offer-anim offer-anim--terms offer-swap">
        <p className="offer-howto">{t('cardOffer.howTo')}</p>
        <h2>{t('cardOffer.termsTitle')}</h2>
        <ul>
          {Array.isArray(terms) && terms.map((term) => <li key={term}>{term}</li>)}
        </ul>
      </footer>
    </div>
  );
}
