"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function Carousel() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const scrollWindowRef = useRef(0);
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

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

    const speed = 0.018; // Pixels per millisecond

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
    <section
      className="py-4 border-t-1 border-b-1 border-dashed border-gray-300 overflow-x-auto scrollbar-hide"
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

        @media (max-width: 480px) {
          .carousel-track {
            --carousel-columns: 1.9;
          }
        }
      `}</style>

      <div ref={trackRef} className="carousel-track">
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
