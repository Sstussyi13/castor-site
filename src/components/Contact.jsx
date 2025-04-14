import React from "react";
import {
  FaTelegramPlane,
  FaVk,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f0f0f] text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
        <p className="text-sm sm:text-base text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Мы готовы обсудить ваш проект, идею или просто вдохновиться. Заполните форму или напишите нам напрямую.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {/* Форма */}
        <form className="space-y-4 sm:space-y-6">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full bg-white bg-opacity-10 placeholder-gray-400 text-white px-4 py-3 rounded-md outline-none focus:ring-2 ring-white ring-opacity-30 transition text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white bg-opacity-10 placeholder-gray-400 text-white px-4 py-3 rounded-md outline-none focus:ring-2 ring-white ring-opacity-30 transition text-sm sm:text-base"
          />
          <textarea
            placeholder="Сообщение"
            rows="4"
            className="w-full bg-white bg-opacity-10 placeholder-gray-400 text-white px-4 py-3 rounded-md outline-none focus:ring-2 ring-white ring-opacity-30 transition text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition text-sm sm:text-base"
          >
            Отправить
          </button>
        </form>

        {/* Контактная информация + соцсети */}
        <div className="flex flex-col justify-center text-gray-400 text-sm sm:text-base space-y-4">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:CastorProduction@yandex.ru"
              className="text-white hover:underline transition break-words"
            >
              CastorProduction@yandex.ru
            </a>
          </p>
          <p>
            <strong>Телефон:</strong>{" "}
            <a
              href="tel:+79160747387"
              className="text-white hover:underline transition"
            >
              +7 (916) 074-73-87
            </a>
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-6 text-xl sm:text-2xl">
            <a href="https://t.me/castor_production" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaTelegramPlane />
            </a>
            <a href="https://vk.com/castor_production" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaVk />
            </a>
            <a href="https://www.instagram.com/castor__production?igsh=MXR5eXRhYTh6NzU5cQ==" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@castor.production?_t=ZM-8vBAe4w4ufu&_r=1" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaTiktok />
            </a>
            <a href="http://www.youtube.com/@Castor_Production" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
