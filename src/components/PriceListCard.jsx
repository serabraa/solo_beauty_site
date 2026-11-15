import React from 'react';
import { FaArrowRight, FaRegFileAlt } from 'react-icons/fa';
import { priceListUrl } from '../seo/links.js';

export default function PriceListCard({ title, description }) {
  return (
    <a
      href={priceListUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-12 flex items-center gap-4 rounded-2xl border border-[#232326] bg-[#18181b] p-5 sm:p-6 transition-colors hover:border-pink-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-500"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500" aria-hidden="true">
        <FaRegFileAlt className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-white group-hover:text-pink-500">{title}</span>
        <span className="mt-1 block text-sm text-gray-400">{description}</span>
      </span>
      <FaArrowRight className="h-4 w-4 shrink-0 text-pink-500 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}
