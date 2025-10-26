"use client";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function Hero() {
  // Créer un tableau avec les items du carrousel (version étendue pour une meilleure boucle)
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
    {
      type: "image",
      src: "/sunset.png",
      alt: "Dot Grid Background",
    },
  ];

  // Récupérer les vidéos du premier élément vidéo (carouselItems[1])
  const mobileVideos =
    carouselItems[1]?.type === "videos" ? carouselItems[1].videos : [];

  return (
    <div className="py-4 border-t-1 border-b-1 border-dashed border-gray-300 overflow-hidden">
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

        .mobile-video {
          display: none;
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

        @media (max-width: 640px) {
          .carousel-track {
            animation: none;
            transform: none;
            gap: 16px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .carousel-item {
            flex: initial;
            width: 100%;
          }

          .carousel-item.duplicate {
            display: none;
          }

          .carousel-track {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .carousel-item {
            width: 100%;
          }

          /* Images - Rangée 1 */
          .item-index-0 {
            order: 1;
          }

          .duplicate-index-2 {
            order: 2;
          }

          /* Vidéo 1 */
          .item-index-1.video-item {
            display: block;
            grid-column: span 2;
            order: 3;
          }

          .item-index-1.video-item .video-stack {
            display: none;
          }

          .item-index-1.video-item .mobile-video {
            display: block;
          }

          /* Images - Rangée 2 */
          .item-index-2 {
            order: 4;
          }

          .duplicate-index-4 {
            order: 5;
          }

          /* Vidéo 2 */
          .item-index-3.video-item {
            display: block;
            grid-column: span 2;
            order: 6;
          }

          .item-index-3.video-item .video-stack {
            display: none;
          }

          .item-index-3.video-item .mobile-video {
            display: block;
          }

          /* Images - Rangée 3 */
          .item-index-4 {
            order: 7;
          }

          .duplicate-index-6 {
            order: 8;
          }

          /* Vidéo 3 */
          .item-index-5.video-item {
            display: block;
            grid-column: span 2;
            order: 9;
          }

          .item-index-5.video-item .video-stack {
            display: none;
          }

          .item-index-5.video-item .mobile-video {
            display: block;
          }

          /* Images - Rangée 4 */
          .item-index-6 {
            order: 10;
          }

          .duplicate-index-8 {
            order: 11;
          }

          /* Vidéo 4 */
          .item-index-7.video-item {
            display: block;
            grid-column: span 2;
            order: 12;
          }

          .item-index-7.video-item .video-stack {
            display: none;
          }

          .item-index-7.video-item .mobile-video {
            display: block;
          }

          /* Images - Rangée 5 */
          .item-index-8 {
            order: 13;
          }

          .duplicate-index-0.image-item {
            order: 14;
          }

          /* Vidéo 5 */
          .item-index-9.video-item {
            display: block;
            grid-column: span 2;
            order: 15;
          }

          .item-index-9.video-item .video-stack {
            display: none;
          }

          .item-index-9.video-item .mobile-video {
            display: block;
          }

          .duplicate {
            display: none;
          }

          .duplicate-index-0.image-item,
          .duplicate-index-2.image-item,
          .duplicate-index-4.image-item,
          .duplicate-index-6.image-item,
          .duplicate-index-8.image-item {
            display: block;
          }
        }
      `}</style>

      <div className="carousel-track">
        {/* Afficher les items originaux */}
        {carouselItems.map((item, index) => {
          const videos = item.type === "videos" ? item.videos ?? [] : [];
          const singleVideo = item.type === "video-single" ? item.video : null;
          const firstVideo = videos[0];
          const secondVideo = videos[1];

          return (
            <div
              key={`original-${index}`}
              className={`carousel-item item-index-${index} ${
                item.type === "image" ? "image-item" : "video-item"
              } flex-shrink-0`}
            >
              {item.type === "image" ? (
                <div className="w-full h-full px-0 md:px-4">
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
              ) : item.type === "video-single" && singleVideo ? (
                <div className="w-full h-full px-4">
                  <div className="relative w-full h-full overflow-hidden rounded-md aspect-video">
                    <LiteYouTubeEmbed
                      id={singleVideo.id}
                      title={singleVideo.title}
                      poster="hqdefault"
                      webp
                    />
                  </div>
                </div>
              ) : firstVideo ? (
                <>
                  <div className="video-stack flex flex-col gap-4 px-4 border-l-1 border-r-1 border-dashed border-gray-300">
                    <div className="video-embed video-embed-first relative aspect-video rounded-md overflow-hidden">
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
                        <div className="video-embed video-embed-second relative aspect-video rounded-md overflow-hidden">
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
                  {mobileVideos[1] && (
                    <div className={`mobile-video mobile-video-index-${index}`}>
                      <div className="px-4">
                        <div className="relative aspect-video rounded-md overflow-hidden">
                          <LiteYouTubeEmbed
                            id={mobileVideos[1].id}
                            title={mobileVideos[1].title}
                            poster="hqdefault"
                            webp
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : null}
            </div>
          );
        })}

        {/* Dupliquer les items pour l'effet de boucle infinie */}
        {carouselItems.map((item, index) => {
          const videos = item.type === "videos" ? item.videos ?? [] : [];
          const singleVideo = item.type === "video-single" ? item.video : null;
          const firstVideo = videos[0];
          const secondVideo = videos[1];

          return (
            <div
              key={`duplicate-${index}`}
              className={`carousel-item duplicate duplicate-index-${index} ${
                item.type === "image" ? "image-item" : "video-item"
              } flex-shrink-0`}
              aria-hidden="true"
            >
              {item.type === "image" ? (
                <div className="w-full h-full px-0 md:px-4">
                  <div className="relative w-full h-full overflow-hidden rounded-md aspect-[580/269]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : item.type === "video-single" && singleVideo ? (
                <div className="w-full h-full px-4">
                  <div className="relative w-full h-full overflow-hidden rounded-md aspect-video">
                    <LiteYouTubeEmbed
                      id={singleVideo.id}
                      title={singleVideo.title}
                      poster="hqdefault"
                      webp
                    />
                  </div>
                </div>
              ) : firstVideo ? (
                <>
                  <div className="video-stack flex flex-col gap-4 px-4 border-l-1 border-r-1 border-dashed border-gray-300">
                    <div className="video-embed video-embed-first relative aspect-video rounded-md overflow-hidden">
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
                        <div className="video-embed video-embed-second relative aspect-video rounded-md overflow-hidden">
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
                  {mobileVideos[1] && (
                    <div className={`mobile-video mobile-video-index-${index}`}>
                      <div className="px-4">
                        <div className="relative aspect-video rounded-md overflow-hidden">
                          <LiteYouTubeEmbed
                            id={mobileVideos[1].id}
                            title={mobileVideos[1].title}
                            poster="hqdefault"
                            webp
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
