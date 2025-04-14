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
      title: "1. Первичная консультация",
      icon: <FaRegHandshake className="text-white text-3xl mb-2" />,
      points: [
        "Знакомство с клиентом и обсуждение идеи проекта.",
        "Определение целей и задач съемки/производства.",
        "Обсуждение бюджета и сроков.",
      ],
    },
    {
      title: "2. Пре-продакшн",
      icon: <FaPencilAlt className="text-white text-3xl mb-2" />,
      points: [
        "Разработка сценария и раскадровки.",
        "Составление детальной сметы расходов.",
        "Согласование всех деталей с клиентом.",
        "Подбор актеров, съемочной группы и необходимых специалистов.",
        "Выбор и бронирование локаций для съемок.",
        "Организация логистической поддержки.",
      ],
    },
    {
      title: "3. Продакшн",
      icon: <FaVideo className="text-white text-3xl mb-2" />,
      points: [
        "Проведение съемочного процесса.",
        "Контроль качества и соответствие сценарию.",
        "Взаимодействие с клиентом на площадке.",
      ],
    },
    {
      title: "4. Постпродакшн",
      icon: <FaFilm className="text-white text-3xl mb-2" />,
      points: [
        "Монтаж отснятого материала.",
        "Добавление спецэффектов и цветокорекции.",
        "Работа над звуком и озвучкой.",
        "Цветокоррекция и финальная обработка.",
      ],
    },
    {
      title: "5. Утверждение и сдача проекта",
      icon: <FaCheckCircle className="text-white text-3xl mb-2" />,
      points: [
        "Демонстрация готового продукта клиенту.",
        "Внесение правок и доработок по запросу клиента.",
        "Финальная сдача проекта и передача всех материалов.",
      ],
    },
    {
      title: "6. Продвижение и поддержка",
      icon: <FaBullhorn className="text-white text-3xl mb-2" />,
      points: [
        "Помощь в продвижении готового фильма/ролика.",
        "Консультации по дальнейшему использованию материала.",
        "Поддержка после завершения проекта.",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Этапы работы с клиентами
        </h2>

        <div className="grid gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-5 p-6 rounded-lg shadow-lg backdrop-blur-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Красный светящийся шар за карточкой */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-red-500 blur-xl opacity-70 z-0" />

              <div className="flex items-center gap-4 mb-3 relative z-10">
                {step.icon}
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-1 relative z-10">
                {step.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
