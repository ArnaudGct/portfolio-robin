"use client";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function Carousel() {
  const carouselItems = [
    {
      type: "image",
      src: "/sunset.png",
      alt: "Dot Grid Background",
    },
    {
      type: "videos",
      videos: [
        { id: "EYgwZB95jqI", title: "test" },
        { id: "JX8m-UuFzcc", title: "test" },
      ],
    },
    {
      type: "image",
      src: "/flower.png",
      alt: "Dot Grid Background",
    },
    {
      type: "videos",
      videos: [
        { id: "ZadUN_Vl2RA", title: "test" },
        { id: "11L3nrAk8HY", title: "test" },
      ],
    },
    {
      type: "image",
      src: "/sunset.png",
      alt: "Dot Grid Background",
    },
    {
      type: "videos",
      videos: [
        { id: "EYgwZB95jqI", title: "test" },
        { id: "EYgwZB95jqI", title: "test" },
      ],
    },
  ];

  return (
    <section className="py-4 border-t-1 border-b-1 border-dashed border-gray-300 overflow-x-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .carousel-track {
          --carousel-columns: 5;
          display: flex;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-item {
          flex: 0 0 calc(100% / var(--carousel-columns));
        }

        .carousel-item .aspect-\\[580\\/269\\] {
          aspect-ratio: 580/269;
        }

        @media (min-width: 1536px) {
          .carousel-track {
            --carousel-columns: 6;
          }
        }

        @media (max-width: 1280px) {
          .carousel-track {
            --carousel-columns: 4;
          }
        }

        @media (max-width: 1024px) {
          .carousel-track {
            --carousel-columns: 3;
          }
        }

        @media (max-width: 768px) {
          .carousel-track {
            --carousel-columns: 2.25;
          }
        }
      `}</style>

      <div className="carousel-track">
        {/* Afficher les items originaux */}
        {carouselItems.map((item, index) => {
          const videos = item.type === "videos" ? item.videos ?? [] : [];
          const firstVideo = videos[0];
          const secondVideo = videos[1];

          return (
            <div
              key={`original-${index}`}
              className={`carousel-item ${
                item.type === "image" ? "image-item" : "video-item"
              } flex-shrink-0`}
            >
              {item.type === "image" ? (
                <div className="w-full h-full px-4">
                  <div className="relative w-full h-full overflow-hidden rounded-md aspect-[580/269]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              ) : firstVideo ? (
                <div className="video-stack flex flex-col gap-4 px-4 border-l-1 border-r-1 border-dashed border-gray-300">
                  <div className="video-embed relative aspect-video rounded-md overflow-hidden">
                    <LiteYouTubeEmbed
                      id={firstVideo.id}
                      title={firstVideo.title}
                      poster="hqdefault"
                      webp
                    />
                  </div>
                  {secondVideo && (
                    <>
                      <div className="divider border-t-1 border-dashed border-gray-300"></div>
                      <div className="video-embed relative aspect-video rounded-md overflow-hidden">
                        <LiteYouTubeEmbed
                          id={secondVideo.id}
                          title={secondVideo.title}
                          poster="hqdefault"
                          webp
                        />
                      </div>
                    </>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}

        {/* Dupliquer les items pour l'effet de boucle infinie */}
        {carouselItems.map((item, index) => {
          const videos = item.type === "videos" ? item.videos ?? [] : [];
          const firstVideo = videos[0];
          const secondVideo = videos[1];

          return (
            <div
              key={`duplicate-${index}`}
              className={`carousel-item ${
                item.type === "image" ? "image-item" : "video-item"
              } flex-shrink-0`}
              aria-hidden="true"
            >
              {item.type === "image" ? (
                <div className="w-full h-full px-4">
                  <div className="relative w-full h-full overflow-hidden rounded-md aspect-[580/269]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : firstVideo ? (
                <div className="video-stack flex flex-col gap-4 px-4 border-l-1 border-r-1 border-dashed border-gray-300">
                  <div className="video-embed relative aspect-video rounded-md overflow-hidden">
                    <LiteYouTubeEmbed
                      id={firstVideo.id}
                      title={firstVideo.title}
                      poster="hqdefault"
                      webp
                    />
                  </div>
                  {secondVideo && (
                    <>
                      <div className="divider border-t-1 border-dashed border-gray-300"></div>
                      <div className="video-embed relative aspect-video rounded-md overflow-hidden">
                        <LiteYouTubeEmbed
                          id={secondVideo.id}
                          title={secondVideo.title}
                          poster="hqdefault"
                          webp
                        />
                      </div>
                    </>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
