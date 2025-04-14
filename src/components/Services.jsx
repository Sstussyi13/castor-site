
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const horizontalVideos = [
  {
    title: "«Дело-процесс»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239018&hd=2&hash=ec992e43d860a367",
  },
  {
    title: "«Не упомянутый»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239019&hd=2&hash=07937d4794a83bac",
  },
  {
    title: "«Ода для одного»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239020&hd=2&hash=ee60db40bcd025c8",
  },
  {
    title: "«Творческая съемка»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239021&hd=2&hash=83250a45b046b6ec",
  },
  {
    title: "«Выбор»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239024&hd=2&hash=fdee7aafa3b332b5",
  },
  {
    title: "«Реклама платья»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239025&hd=2&hash=43ed61f0d09f8260",
  },
  {
    title: "«Съёмки рекламы»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239026&hd=2&hash=5db6668c15ba1a68",
  },
  {
    title: "«Съёмки рекламы 2»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239027&hd=2&hash=b469360785f25e20",
  },
  {
    title: "«Реклама кондитерской»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239028&hd=2&hash=24069785006b3776",
  },
  {
    title: "«Ютюбная работа»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239030&hd=2&hash=1f9cedc0e9c796c5",
  },
  {
    title: "«Серебрянный браслет»",
    video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239031&hd=2&hash=f0403ca1c22dab85",
  },
];

const verticalVideos = [
  {
    title: "«Love»",
    video: "/videos/love.mp4",
  },
  {
    title: "«Как повлияло творчество»",
    video: "/videos/Как повлияло творчество .mp4",
  },
  {
    title: "«Что для тебя ночь?»",
    video: "/videos/Что для тебя ночь _ .mp4",
  },
  {
    title: "«Что ты чувствуешь когда творишь»",
    video: "/videos/Что ты чувствуешь когда творишь _ .mp4",
  },
];

export default function Projects() {
  const videoRefs = useRef([]);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });

    const handleFullscreenChange = () => {
      videoRefs.current.forEach((video) => {
        if (
          video &&
          !document.fullscreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement
        ) {
          video.pause();
        }
      });
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleFullscreen = (ref, index) => {
    const video = ref.current;
    if (video) {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
      else if (video.msRequestFullscreen) video.msRequestFullscreen();
      video.play();
      videoRefs.current[index] = video;
    }
  };

  return (
    <section id="projects" className="bg-[#0f0f0f] text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-12" data-aos="fade-up">
          Наши проекты
        </h2>

        {/* Горизонтальные видео — VK Video, без фона */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {horizontalVideos.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full pb-[56.25%] bg-black rounded-xl overflow-hidden">
                <iframe
                  src={project.video}

allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  title={project.title}
                />
              </div>
              <p className="text-white text-left text-lg sm:text-xl font-semibold mt-2 pl-2 tracking-wide">
                {project.title}
              </p>
            </div>
          ))}
        </div>

        {/* Разделитель */}
        <div className="my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Вертикальные видео */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {verticalVideos.map((project, index) => {
            const ref = useRef(null);
            return (
              <div
                key={index}
                onClick={() => handleFullscreen(ref, index)}
                className="group rounded-2xl overflow-hidden cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="relative w-full pb-[177.78%] bg-black rounded-2xl overflow-hidden">
                  <video
                    ref={ref}
                    src={project.video}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-300 rounded-2xl"
                  />
                </div>
                <p className="text-white text-left text-lg sm:text-xl font-semibold mt-2 pl-2 tracking-wide">
                  {project.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}