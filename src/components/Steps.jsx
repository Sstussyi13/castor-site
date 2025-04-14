import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRegHandshake,
  FaPencilAlt,
  FaVideo,
  FaFilm,
  FaCheckCircle,
  FaBullhorn,
} from "react-icons/fa";

export default function Steps() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const steps = [
    {
      title: "Консультация",
      icon: <FaRegHandshake />,
      description:
        "Обсуждаем цели, идею проекта, бюджет и сроки. Формируем техническое задание.",
    },
    {
      title: "Пре-продакшн",
      icon: <FaPencilAlt />,
      description:
        "Пишем сценарий, подбираем команду, локации, готовим все к съёмке.",
    },
    {
      title: "Продакшн",
      icon: <FaVideo />,
      description:
        "Проводим съёмки по сценарию с контролем качества на каждом этапе.",
    },
    {
      title: "Постпродакшн",
      icon: <FaFilm />,
      description:
        "Монтаж, цветокоррекция, звук, эффекты. Формируем финальный вариант.",
    },
    {
      title: "Сдача проекта",
      icon: <FaCheckCircle />,
      description:
        "Презентация результата клиенту. Внесение правок и передача материала.",
    },
    {
      title: "Продвижение",
      icon: <FaBullhorn />,
      description:
        "Помогаем с публикацией и распространением. Даём рекомендации по продвижению.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20" data-aos="fade-up">
          Этапы нашей работы
        </h2>

        {/* Вертикальная линия по центру */}
        
        <div className="absolute left-1/2 top-[180px] bottom-[120px] w-[2px] bg-gradient-to-b from-pink-500 via-red-500 to-purple-500 opacity-50 blur-[1px] bg-[length:2px_400%] bg-[0_0] animate-gradient-flow z-0 hidden sm:block" />



        <div className="flex flex-col gap-20 relative z-10">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const fade = isLeft ? "fade-right" : "fade-left";
            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
                data-aos={fade}
                data-aos-delay={index * 150}
              >
                <div
  className={`w-full sm:w-[46%] bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl relative transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-pink-500/30 ${
    isLeft ? "sm:mr-auto" : "sm:ml-auto"
  }`}
                >
                  <div className="flex items-center gap-4 mb-4 text-red-400 text-2xl">
                    <div className="p-4 bg-white/10 rounded-full">{step.icon}</div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
