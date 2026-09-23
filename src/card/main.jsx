// Entry for /card/ — the page opened from the QR code on the physical card.
// Separate from the main site bundle so it loads fast on a phone.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import './card.css'
import '../i18.js'
import CardOffer from './CardOffer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardOffer />
  </StrictMode>,
)
