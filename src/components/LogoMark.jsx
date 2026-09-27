import React from 'react';
import logo from '../assets/solo_logo.png';

/* The logo PNG is dark ink on transparency, so on the site's black
   background it all but disappears. Use it as a mask instead and let the
   className supply the fill (e.g. bg-pink-500) and the size. */
export default function LogoMark({ className = '', label = 'Solo Beauty' }) {
  const mask = `url(${logo}) center / contain no-repeat`;
  return (
    <div
      role="img"
      aria-label={label}
      className={className}
      style={{ WebkitMask: mask, mask, aspectRatio: '2031 / 1989' }}
    />
  );
}
