import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import i18n from './i18.js'
import { languageForPath } from './seo/site.js'

i18n.changeLanguage(languageForPath(window.location.pathname)).then(() => {
  document.documentElement.lang = i18n.resolvedLanguage;
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
