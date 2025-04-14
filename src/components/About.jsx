import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-[#0f0f0f] text-white py-16 px-4 sm:px-6 md:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-snug"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Кто мы такие
        </h2>
        <p
          className="text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Castor — это не просто продакшн. Мы — визуальные рассказчики, которые превращают свет, звук и эмоции в настоящее искусство. Мы работаем не по шаблонам — мы создаём миры.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center gap-8 md:gap-10 max-w-6xl mx-auto mt-6 sm:mt-10 px-2 sm:px-0">
        <div
          className="flex-1 border-l-4 border-red-600 pl-4 sm:pl-6 hover:scale-[1.02] transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-base sm:text-xl font-semibold mb-2 text-white">Идея</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Каждое видео начинается с идеи. Мы помогаем её найти, раскрыть и упаковать в визуальную форму.
          </p>
        </div>
        <div
          className="flex-1 border-l-4 border-red-600 pl-4 sm:pl-6 hover:scale-[1.02] transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-base sm:text-xl font-semibold mb-2 text-white">Реализация</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Съёмка, монтаж, графика и звук — всё под контролем. Мы создаём проекты, в которые хочется пересмотреть.
          </p>
        </div>
        <div
          className="flex-1 border-l-4 border-red-600 pl-4 sm:pl-6 hover:scale-[1.02] transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="text-base sm:text-xl font-semibold mb-2 text-white">Результат</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Мы не просто сдаём проект — мы создаём продукт, который работает на вас: вдохновляет, продаёт, рассказывает.
          </p>
        </div>
      </div>
    </section>
  );
}

