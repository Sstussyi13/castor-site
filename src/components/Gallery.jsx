import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Ленивая подгрузка, оптимизация URL
const images = Array.from({ length: 21 }, (_, i) => ({
  src: `${process.env.PUBLIC_URL}/img/${i + 1}.JPG`,
  alt: `Фото ${i + 1}`,
}));

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.1,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 24 },
      },
    },
  });

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-4 sm:py-24 sm:px-6">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Фотографии и бэкстейдж
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-3 sm:mt-4">
          Немного кадров из процесса съёмок и атмосферы за кадром
        </p>
      </div>

      {/* Слайдер с lazy-loading изображениями */}
      <div ref={sliderRef} className="keen-slider">
        {images.map(({ src, alt }, index) => (
          <div
            key={index}
            className="keen-slider__slide rounded-xl overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Лайтбокс со сжатыми изображениями */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </section>
  );
}
