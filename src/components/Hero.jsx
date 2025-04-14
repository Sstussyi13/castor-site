import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full font-sans text-white">
      {/* Фон через backgroundImage — производительнее */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
        style={{ backgroundImage: 'url(/img/bg.JPG)' }}
      ></div>

      {/* Контент поверх */}
      <div className="relative z-20 min-h-[100dvh] flex flex-col justify-between">
        {/* Шапка */}
        <header className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-white/90 text-black shadow-sm">
          <img
            src="/img/logo.svg"
            alt="Castor Logo"
            className="h-8 sm:h-8 w-auto"
          />
          <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-800">
            <a href="#about" className="hover:text-black transition">О нас</a>
            <a href="#projects" className="hover:text-black transition">Проекты</a>
            <a href="#contact" className="hover:text-black transition">Контакты</a>
          </nav>
        </header>

        {/* Центрированный текст */}
        <div className="text-center px-4 sm:px-6 pb-20 sm:pb-28 max-w-3xl mx-auto">
          <p
            className="uppercase tracking-widest text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            визуальные истории
          </p>
          <h1
            className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4 leading-snug sm:leading-tight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Погружение в смысл через кадр
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Мы создаём визуальные продукты, которые запоминаются. Эстетика. Динамика. Глубина.
          </p>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-gray-300"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Заказать звонок
          </button>
        </div>
      </div>

      {/* Градиент снизу */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 translate-y-4 pointer-events-none" />
    </section>
  );
}
