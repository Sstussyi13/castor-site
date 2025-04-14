import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const horizontalVideos = [
  {
    title: "«Дело-процесс»",
    img: "/img/Дело-процесс.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239018&hd=2&hash=ec992e43d860a367&autoplay=1",
  },
  {
    title: "«Не упомянутый»",
    img: "/img/Не упомянутый.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239019&hd=2&hash=07937d4794a83bac&autoplay=1",
  },
  {
    title: "«Ода для одного»",
    img: "/img/Ода для одного.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239020&hd=2&hash=ee60db40bcd025c8&autoplay=1",
  },
  {
    title: "«Творческая съемка»",
    img: "/img/Творческая съемка.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239021&hd=2&hash=83250a45b046b6ec&autoplay=1",
  },
  {
    title: "«Выбор»",
    img: "/img/Выбор.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239024&hd=2&hash=fdee7aafa3b332b5&autoplay=1",
  },
  {
    title: "«Реклама платья»",
    img: "/img/Реклама платья.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239025&hd=2&hash=43ed61f0d09f8260&autoplay=1",
  },
  {
    title: "«Съёмки рекламы»",
    img: "/img/Съёмки рекламы.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239026&hd=2&hash=5db6668c15ba1a68&autoplay=1",
  },
  {
    title: "«Съёмки рекламы 2»",
    img: "/img/Съёмки рекламы 2.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239027&hd=2&hash=b469360785f25e20&autoplay=1",
  },
  {
    title: "«Реклама кондитерской»",
    img: "/img/Реклама кондитерской.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239028&hd=2&hash=24069785006b3776&autoplay=1",
  },
  {
    title: "«Ютюбная работа»",
    img: "/img/Ютюбная работа.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239030&hd=2&hash=1f9cedc0e9c796c5&autoplay=1",
  },
  {
    title: "«Серебрянный браслет»",
    img: "/img/Серебрянный браслет.png",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239031&hd=2&hash=f0403ca1c22dab85&autoplay=1",
  }
];

const verticalVideos = [
  {
    title: "«Love»",
    video: "/videos/love.mov",
  },
  {
    title: "«Как повлияло творчество»",
    video: "/videos/Как повлияло творчество .mov",
  },
  {
    title: "«Что для тебя ночь?»",
    video: "/videos/Что для тебя ночь _ .mov",
  },
  {
    title: "«Что ты чувствуешь когда творишь»",
    video: "/videos/Что ты чувствуешь когда творишь _ .mov",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section id="projects" className="bg-[#0f0f0f] text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-12" data-aos="fade-up">
          Наши проекты
        </h2>

        {/* Горизонтальные видео */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {horizontalVideos.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelected(project)}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 sm:h-64 object-cover transform group-hover:scale-105 transition duration-300 rounded-2xl"
              />
              <div className="text-sm text-white text-center mt-2">{project.title}</div>
            </div>
          ))}
        </div>
        <div className="my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Вертикальные видео */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {verticalVideos.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelected(project)}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[9/16] overflow-hidden">
                <video
                  src={project.video}
                  muted
                  playsInline
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 rounded-2xl"
                />
              </div>
              <div className="text-sm text-white text-center mt-2">{project.title}</div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white text-black rounded-lg overflow-hidden max-w-2xl w-full shadow-lg relative transform transition-all duration-300 ease-out ${
              isClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-2xl font-bold text-black hover:text-gray-500 z-10"
            >
              &times;
            </button>

            {selected.video?.endsWith(".mp4") ? (
              <video
                src={selected.video}
                controls
                autoPlay
                className="w-full aspect-[9/16] object-cover rounded-lg"
              />
            ) : (
              <iframe
                src={selected.video}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video rounded-lg"
                frameBorder="0"
                title={selected.title}
              />
            )}

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{selected.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
