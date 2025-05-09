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
      description: "Обсуждаем цели проекта, идеи, бюджет и сроки.",
    },
    {
      title: "Пре-продакшн",
      icon: <FaPencilAlt />,
      description: "Сценарий, подбор команды и локаций, подготовка к съёмке.",
    },
    {
      title: "Продакшн",
      icon: <FaVideo />,
      description: "Съёмочный процесс, контроль исполнения и креатив на площадке.",
    },
    {
      title: "Постпродакшн",
      icon: <FaFilm />,
      description: "Монтаж, звук, цвет, эффекты. Создание финального продукта.",
    },
    {
      title: "Сдача проекта",
      icon: <FaCheckCircle />,
      description: "Презентация, финальные правки и передача материалов.",
    },
    {
      title: "Продвижение",
      icon: <FaBullhorn />,
      description: "Помощь с публикацией, рекомендации и поддержка.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-16 z-10 relative"
          data-aos="fade-up"
        >
          Этапы нашей работы
        </h2>

        {/* Светящийся круг в фоне */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 opacity-20 blur-[180px] rounded-full z-0" />

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.04] hover:shadow-pink-500/20 hover:border-pink-500/30 hover:bg-white/10"

              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4 text-red-400 mb-4">
              <div className="text-3xl bg-white/10 p-3 rounded-full transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
  {step.icon}
</div>

                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
