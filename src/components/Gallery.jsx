import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  '/images/salon1.jpg',
  '/images/salon2.jpg',
  '/images/salon3.jpg',
  '/images/salon4.jpg',
    '/images/salon1.jpg',
  '/images/salon2.jpg',
  '/images/salon3.jpg',
  '/images/salon4.jpg',
  // …add as many as you like
];

function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 400,      // animation duration in ms
      easing: 'ease-in-out',
      once: true,         // animate only once
    });
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our Work
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
