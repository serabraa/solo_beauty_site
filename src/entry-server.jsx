import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import i18n from './i18.js';
import ServicePage from './ServicePage.jsx';

export async function render(language) {
  await i18n.changeLanguage(language);
  return renderToString(<App />);
}

export function renderService(language, slug) {
  return renderToString(<ServicePage language={language} slug={slug} />);
}
