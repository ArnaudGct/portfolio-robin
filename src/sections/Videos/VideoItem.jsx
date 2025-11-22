"use client";
import { useState, useRef, useEffect } from "react";
import Tag from "./../../components/Tag";
import { Maximize2, X } from "lucide-react";
import { render } from "react-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function VideoItem({ id, title, tags, url, pageCurrent, date }) {
  const [loading, setLoading] = useState(true); // Pour gérer l'état de chargement
  const [isInView, setIsInView] = useState(false); // Pour vérifier si la vidéo est dans la vue
  const [isModalOpen, setIsModalOpen] = useState(false); // Pour gérer l'ouverture du modal
  const [isAnimating, setIsAnimating] = useState(false); // Pour gérer l'animation de fermeture
  const videoRef = useRef(null); // Référence pour l'élément vidéo

  // Formater la date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  let youtubeId = "";
  try {
    const parsedUrl = new URL(url);
    youtubeId = parsedUrl.searchParams.get("v");
  } catch (error) {
    console.error(`❌ URL YouTube invalide (${url}) :`, error);
  }

  // Dès que la vidéo est prête (iframe chargée), on arrête l'animation de chargement
  const handleIframeLoad = () => {
    setLoading(false);
  };

  // Observer pour vérifier si l'élément vidéo est dans la vue
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // La vidéo est dans la vue, on commence à charger
            observer.disconnect(); // On se déconnecte de l'observer une fois l'élément visible
          }
        });
      },
      {
        threshold: 0.5, // L'élément doit être à 50% visible pour être chargé
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Nettoyage de l'observer lorsqu'on quitte le composant
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Gestion du scroll lors de l'ouverture/fermeture du modal
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      // Petit délai pour l'animation d'entrée
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      document.body.style.overflow = "unset";
      setIsAnimating(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Gestion de la fermeture avec la touche Échap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  // Fonction pour gérer la fermeture avec animation
  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // Durée de l'animation de sortie
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          className="relative aspect-video cursor-pointer"
          ref={videoRef}
          onClick={() => setIsModalOpen(true)}
        >
          {/* Skeleton loader */}
          {!isInView || loading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-50 opacity-70">
              {/* Skeleton loader */}
              <div className="w-full h-full bg-gradient-to-r from-orange-600 to-orange-50 rounded-sm animate-pulse opacity-70"></div>
            </div>
          ) : null}

          {/* Lorsque la vidéo est dans la vue, charger l'iframe */}
          {isInView && youtubeId ? (
            <LiteYouTubeEmbed
              id={youtubeId}
              title={title}
              poster="hqdefault"
              webp
            />
          ) : null}
          {!isInView && !youtubeId && (
            <p className="text-red-500">Lien invalide</p>
          )}
        </div>
        <div
          className="w-full flex items-center justify-between cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="w-[90%] flex flex-col gap-1.5">
            <p className="w-full text-xl font-general-medium text-black truncate">
              {title}
            </p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                {tags.map((t, index) => (
                  <Tag key={`${id}-${t}-${index}`} className="text-xs">
                    {t}
                  </Tag>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center p-2 text-orange-600 min-w-9 w-[10%] hover:text-black transition-colors">
            <Maximize2 size={16} strokeWidth={1.75} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-300 ${
            isAnimating ? "bg-black/80" : "bg-black/0"
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`relative w-full max-w-7xl bg-white rounded-sm shadow-2xl transition-all duration-300 ${
              isAnimating
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 sm:-right-12 text-white hover:text-orange-600 transition-colors z-10 cursor-pointer"
              aria-label="Fermer"
            >
              <X size={32} strokeWidth={2} />
            </button>

            {/* Vidéo dans le modal */}
            <div className="relative aspect-video w-full rounded-t-sm rounded-b-none overflow-hidden">
              {youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p className="text-red-500">Lien invalide</p>
              )}
            </div>

            {/* Informations de la vidéo */}
            <div className="flex flex-col gap-2 p-4 sm:p-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl sm:text-2xl font-general-medium text-black">
                  {title}
                </h2>
                {date && (
                  <p className="text-sm text-gray-600">{formatDate(date)}</p>
                )}
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((t, index) => (
                    <Tag
                      key={`modal-${id}-${t}-${index}`}
                      className="text-xs sm:text-sm"
                    >
                      {t}
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
