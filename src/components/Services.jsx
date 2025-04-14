import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const videos = [
  { title: "«Дело-процесс»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239018&hd=2&hash=ec992e43d860a367", type: "iframe" },
  { title: "«Не упомянутый»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239019&hd=2&hash=07937d4794a83bac", type: "iframe" },
  { title: "«Ода для одного»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239020&hd=2&hash=ee60db40bcd025c8", type: "iframe" },
  { title: "«Творческая съемка»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239021&hd=2&hash=83250a45b046b6ec", type: "iframe" },
  { title: "«Выбор»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239024&hd=2&hash=fdee7aafa3b332b5", type: "iframe" },
  { title: "«Реклама платья»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239025&hd=2&hash=43ed61f0d09f8260", type: "iframe" },
  { title: "«Съёмки рекламы»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239026&hd=2&hash=5db6668c15ba1a68", type: "iframe" },
  { title: "«Съёмки рекламы 2»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239027&hd=2&hash=b469360785f25e20", type: "iframe" },
  { title: "«Реклама кондитерской»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239028&hd=2&hash=24069785006b3776", type: "iframe" },
  { title: "«Ютюбная работа»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239030&hd=2&hash=1f9cedc0e9c796c5", type: "iframe" },
  { title: "«Серебрянный браслет»", video: "https://vkvideo.ru/video_ext.php?oid=-191796974&id=456239031&hd=2&hash=f0403ca1c22dab85", type: "iframe" },
  { title: "«Love»", video: "/videos/love.mp4", type: "video" },
  { title: "«Как повлияло творчество»", video: "/videos/Как повлияло творчество .mp4", type: "video" },
  { title: "«Что для тебя ночь?»", video: "/videos/Что для тебя ночь _ .mp4", type: "video" },
  { title: "«Что ты чувствуешь когда творишь»", video: "/videos/Что ты чувствуешь когда творишь _ .mp4", type: "video" },
];

export default function Projects() {
  const activeVideoRef = useRef(null);
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.8, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    const handleExitFullscreen = () => {
      const video = activeVideoRef.current;
      if (
        video &&
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        video.pause();
      }
    };

    document.addEventListener("fullscreenchange", handleExitFullscreen);
    document.addEventListener("webkitfullscreenchange", handleExitFullscreen);

    return () => {
      document.removeEventListener("fullscreenchange", handleExitFullscreen);
      document.removeEventListener("webkitfullscreenchange", handleExitFullscreen);
    };
  }, []);

  return (
    <section id="projects" className="bg-[#0f0f0f] text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-12">
          Наши проекты
        </h2>

        {/* Стили кнопок прокрутки */}
        <div className="flex justify-end gap-4 mb-4 pr-4">
          <button
            onClick={() => slider.current?.prev()}
            className="w-12 h-12 rounded-full bg-white text-black text-2xl font-bold flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            aria-label="Предыдущий слайд"
          >
            ←
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="w-12 h-12 rounded-full bg-white text-black text-2xl font-bold flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            aria-label="Следующий слайд"
          >
            →
          </button>
        </div>

        {/* Слайдер */}
        <div ref={sliderRef} className="keen-slider">
          {videos.map((project, index) => {
            const isMP4 = project.type === "video";
            const ref = useRef(null);

            useEffect(() => {
              const video = ref.current;
              if (!video || !isMP4) return;
              const onLoaded = () => {
                if (video.readyState > 0 && video.currentTime === 0) {
                  video.currentTime = 0.1;
                }
              };
              video.addEventListener("loadedmetadata", onLoaded);
              return () => video.removeEventListener("loadedmetadata", onLoaded);
            }, [isMP4]);

            return (
              <div key={index} className="keen-slider__slide overflow-hidden rounded-2xl">
                <div className="relative w-full pb-[60%] bg-black rounded-2xl overflow-hidden">
                  {isMP4 ? (
                    <video
                      ref={ref}
                      src={project.video}
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                      onClick={(e) => {
                        const video = e.currentTarget;
                        activeVideoRef.current = video;
                        if (video.webkitEnterFullscreen) {
                          video.webkitEnterFullscreen();
                        } else if (video.requestFullscreen) {
                          video.requestFullscreen().then(() => video.play()).catch(() => {});
                        }
                      }}
                      onPlay={() => {
                        document.querySelectorAll("video").forEach((v) => {
                          if (v !== ref.current) v.pause();
                        });
                      }}
                    />
                  ) : (
                    <iframe
                      src={project.video}
                      allow="autoplay; encrypted-media"
                      loading="lazy"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-2xl"
                      frameBorder="0"
                      title={project.title}
                    />
                  )}
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
