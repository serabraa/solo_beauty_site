import React from 'react';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    // full‐screen overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 h-5/6 md:w-3/4 md:h-4/5"
        onClick={e => e.stopPropagation()}
      >
        {/* close button */}
        <button
          className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
