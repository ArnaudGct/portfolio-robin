"use client";
import { useRef, useState, useEffect } from "react";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";

export default function Photos() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const carouselItems = [
    {
      src: "/sunset.png",
      alt: "Dot Grid Background",
    },
    {
      src: "/flower.png",
      alt: "Dot Grid Background",
    },
    {
      src: "/sunset.png",
      alt: "Dot Grid Background",
    },
    {
      src: "/flower.png",
      alt: "Dot Grid Background",
    },
    {
      src: "/sunset.png",
      alt: "Dot Grid Background",
    },
    {
      src: "/flower.png",
      alt: "Dot Grid Background",
    },
    {
      src: "/sunset.png",
      alt: "Dot Grid Background",
    },
    {
      src: "/flower.png",
      alt: "Dot Grid Background",
    },
  ];

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Reprendre après 3 secondes d'inactivité
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Pas besoin de useEffect pour gérer l'animation
  // L'animation CSS s'occupe de la boucle infinie

  return (
    <section className="relative flex overflow-hidden">
      <div className="relative w-[95%] max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-16 sm:gap-8">
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:justify-between sm:items-center w-full sm:gap-12">
          <div className="flex flex-col">
            <div className="flex w-fit">
              <p className="text-2xl text-black font-clash-bold">
                Création de{" "}
                <span className="text-orange-500 tracking-normal">
                  photographies professionnelles.
                </span>{" "}
              </p>
            </div>
            <p className="text-gray-100">
              Des instants figés dans la lumière de notre univers.
            </p>
          </div>
          <ButtonMain href="/photos" className="w-fit">
            Voir plus
          </ButtonMain>
        </div>
        <div
          className="w-full overflow-x-auto scrollbar-hide"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .carousel-track {
              --carousel-columns: 5;
              display: flex;
              animation: scroll 60s linear infinite;
              will-change: transform;
            }

            .carousel-track:hover {
              animation-play-state: paused;
            }

            .carousel-track.paused {
              animation-play-state: paused;
            }

            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }

            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }

            .carousel-item {
              flex: 0 0 calc(100% / var(--carousel-columns));
            }

            .carousel-item .aspect-\\[3\\/4\\] {
              aspect-ratio: 3/4;
            }

            @media (min-width: 1536px) {
              .carousel-track {
                --carousel-columns: 6;
              }
            }

            @media (max-width: 1280px) {
              .carousel-track {
                --carousel-columns: 4;
                animation-duration: 50s;
              }
            }

            @media (max-width: 1024px) {
              .carousel-track {
                --carousel-columns: 3;
                animation-duration: 40s;
              }
            }

            @media (max-width: 768px) {
              .carousel-track {
                --carousel-columns: 2.25;
                animation-duration: 30s;
              }
            }

            @media (max-width: 480px) {
              .carousel-track {
                --carousel-columns: 1.9;
                animation-duration: 25s;
              }
            }
          `}</style>

          <div
            ref={trackRef}
            className={`carousel-track ${isPaused ? "paused" : ""}`}
          >
            {/* Première série d'items */}
            {carouselItems.map((item, index) => (
              <div
                key={`first-${index}`}
                className="carousel-item flex-shrink-0"
              >
                <div className="w-full h-full px-1 sm:px-2">
                  <div className="relative w-full h-full overflow-hidden rounded-md aspect-[3/4]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority={index < 4}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Deuxième série d'items (copie exacte pour la boucle) */}
            {carouselItems.map((item, index) => (
              <div
                key={`second-${index}`}
                className="carousel-item flex-shrink-0"
                aria-hidden="true"
              >
                <div className="w-full h-full px-1 sm:px-2">
                  <div className="relative w-full h-full overflow-hidden rounded-md aspect-[3/4]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
