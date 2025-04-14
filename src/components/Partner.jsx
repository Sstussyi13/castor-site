import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Partner() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section id="partners" className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-4xl font-bold text-black mb-8"
          data-aos="fade-up"
        >
          Наши партнёры
        </h2>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Лого 1 */}
          <a
            href="https://burkalo.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition duration-300"
          >
            <img
              src="/img/logo_burkalo.svg"
              alt="Партнёр 1"
              className="h-12 sm:h-16 object-contain"
            />
          </a>

          {/* Лого 2 */}
          <a
            href="https://www.metrikapro.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10 sm:ml-0 hover:scale-105 transition duration-300"
          >
            <img
              src="/img/metrikalogo.svg"
              alt="Партнёр 2"
              className="h-12 ml-0 sm:h-16 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

