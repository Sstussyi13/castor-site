import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Используем process.env.PUBLIC_URL для корректного пути
const images = Array.from({ length: 21 }, (_, i) => `${process.env.PUBLIC_URL}/img/${i + 1}.JPG`);


export default function Gallery() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
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

  const [lightboxIndex, setLightboxIndex] = useState(-1);

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

      <div ref={sliderRef} className="keen-slider cursor-pointer">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide rounded-xl overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-56 sm:h-80 md:h-96 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
}
