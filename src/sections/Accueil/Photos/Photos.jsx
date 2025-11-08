"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";

export default function Photos() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const scrollWindowRef = useRef(0);
  const isPausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);

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

  const clearPauseTimeout = () => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  };

  const handlePause = () => {
    clearPauseTimeout();
    setIsPaused(true);
  };

  const handleResume = (delay = 0) => {
    clearPauseTimeout();
    if (delay > 0) {
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, delay);
      return;
    }
    setIsPaused(false);
  };

  const handleTouchStart = () => {
    handlePause();
  };

  const handleTouchEnd = () => {
    // Reprendre après 3 secondes d'inactivité
    handleResume(3000);
  };

  const handleMouseEnter = () => {
    handlePause();
  };

  const handleMouseLeave = () => {
    handleResume();
  };

  const updateScrollMetrics = useCallback(() => {
    const track = trackRef.current;
    const container = carouselRef.current;

    if (!track || !container) {
      return;
    }

    const loopWidth = track.scrollWidth / 2;
    scrollWindowRef.current = loopWidth;

    if (loopWidth > 0) {
      const normalizedScroll = container.scrollLeft % loopWidth;
      container.scrollLeft = normalizedScroll;
      scrollPositionRef.current = normalizedScroll;
    } else {
      scrollPositionRef.current = container.scrollLeft;
    }
  }, []);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    updateScrollMetrics();

    const handleResize = () => {
      updateScrollMetrics();
    };

    window.addEventListener("resize", handleResize);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateScrollMetrics]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) {
      return undefined;
    }

    updateScrollMetrics();
    scrollPositionRef.current = container.scrollLeft;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      return () => {};
    }

    const speed = 0.015; // Pixels per millisecond

    const syncPosition = () => {
      scrollPositionRef.current = container.scrollLeft;
    };

    container.addEventListener("scroll", syncPosition, { passive: true });

    const animate = (timestamp) => {
      if (lastTimestampRef.current == null) {
        lastTimestampRef.current = timestamp;
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!isPausedRef.current) {
        const loopWidth = scrollWindowRef.current;
        let nextPosition = scrollPositionRef.current + delta * speed;

        if (loopWidth > 0) {
          nextPosition = nextPosition % loopWidth;
          if (nextPosition < 0) {
            nextPosition += loopWidth;
          }
        }

        scrollPositionRef.current = nextPosition;
        container.scrollLeft = nextPosition;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("scroll", syncPosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimestampRef.current = null;
    };
  }, [updateScrollMetrics]);

  useEffect(() => {
    return () => {
      clearPauseTimeout();
    };
  }, []);

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
          {/* <ButtonMain href="/photos" className="w-fit">
            Voir plus
          </ButtonMain> */}
        </div>
        <div
          className="w-full overflow-x-auto scrollbar-hide"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <style jsx>{`
            .carousel-track {
              --carousel-columns: 5;
              display: flex;
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

            @media (max-width: 480px) {
              .carousel-track {
                --carousel-columns: 1.9;
              }
            }
          `}</style>

          <div ref={trackRef} className="carousel-track">
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
