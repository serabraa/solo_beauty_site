import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/solo_logo.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#services", label: t("services") },
    // { href: "#gallery", label: t("gallery") },
    { href: "#pricing", label: t("pricelist") },
    { href: "#contact", label: t("contact.title") },
  ];

  const languages = [
    { code: "ru", label: "RU" },
    { code: "hy", label: "HY" },
  ];

  return (
    <header className="sticky top-0 w-full bg-black border-b border-pink-500/20 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="BeautySalon Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-pink-500 transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language & CTA desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className="text-sm font-medium text-white hover:text-pink-500 transition-colors border border-transparent px-2 py-1 rounded"
            >
              {lang.label}
            </button>
          ))}
          <a
            href="https://apnt.app/solo_beauty"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-semibold shadow-md border-2 border-pink-500/0 hover:border-pink-500"
          >
            {t("book")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-pink-500/20">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-pink-500 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://apnt.app/solo_beauty"
              className="text-white bg-pink-500 rounded-lg px-4 py-2 hover:bg-pink-600 transition font-semibold shadow-md border-2 border-pink-500/0 hover:border-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              {t("book")}
            </a>
            <div className="flex items-center space-x-4 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setMenuOpen(false);
                  }}
                  className="text-sm font-medium text-white hover:text-pink-500 transition-colors border border-transparent px-2 py-1 rounded"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
