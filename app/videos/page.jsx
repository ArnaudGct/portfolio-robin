"use client";
import { useEffect, useState } from "react";
import VideoItem from "./../../src/sections/Videos/VideoItem";
import TagCheckbox from "../../src/components/TagCheckbox";
import { motion, AnimatePresence } from "motion/react";
import NumberFlow from "@number-flow/react";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedTags, setselectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isVisuallyLoading, setIsVisuallyLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos");
        if (!res.ok) {
          console.error("Erreur fetching videos:", res.status);
          return;
        }
        const data = await res.json();
        if (!mounted) return;
        setVideos(data);
        setFilteredVideos(data);
        setAllTags(extractUniqueTags(data));
      } catch (err) {
        console.error("Erreur lors de la récupération des vidéos:", err);
      } finally {
        const minLoadingTime = 300;
        setTimeout(() => {
          if (!mounted) return;
          setIsLoading(false);
          setIsVisuallyLoading(false);
        }, minLoadingTime);
      }
    };

    fetchVideos();

    return () => {
      mounted = false;
    };
  }, []);

  const extractUniqueTags = (videoData) => {
    const tagSet = new Set();

    videoData.forEach((video) => {
      video.tags.forEach((tag) => {
        if (tag) tagSet.add(tag);
      });
    });

    return Array.from(tagSet).sort();
  };

  useEffect(() => {
    let result = [...videos];

    if (selectedTags.length > 0) {
      result = result.filter((video) => {
        return selectedTags.every((tag) => video.tags.includes(tag));
      });
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (video) =>
          video.titre.toLowerCase().includes(query) ||
          (video.description && video.description.toLowerCase().includes(query))
      );
    }

    setFilteredVideos(result);
  }, [videos, selectedTags, searchQuery]);

  const toggleTag = (tag) => {
    setselectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <main className="flex flex-col justify-center items-center gap-16 mb-20">
      <div className="border border-solid border-b border-t border-r-0 border-l-0 border-gray-50 w-full">
        <div className="flex flex-col gap-6 md:gap-4 w-[95%] max-w-[1440px] mx-auto py-8">
          <div className="flex flex-col gap-6 md:gap-4 md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col">
              {isVisuallyLoading ? (
                <>
                  <div className="h-8 w-48 bg-orange-100/40 rounded-md mb-2"></div>
                  <div className="h-6 w-72 bg-orange-100/40 rounded-md"></div>
                </>
              ) : (
                <>
                  <p className="text-4xl font-extrabold font-clash-bold text-orange-500">
                    <NumberFlow value={filteredVideos.length} />{" "}
                    <span className="font-clash-light text-black">
                      vidéo
                      {filteredVideos.length > 1 ? "s" : ""}
                    </span>
                  </p>
                </>
              )}
            </div>
            <div className="w-full md:w-auto relative">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Rechercher une vidéo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 px-4 bg-gray-200  dark:placeholder:text-orange-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 md:w-64 lg:w-96"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {allTags.map((type) => {
                // Au lieu de compter sur toutes les vidéos, compter seulement sur les vidéos filtrées
                let availableVideos = videos;

                // Si des tags sont sélectionnés, filtrer d'abord par les autres tags (excluant le tag actuel)
                if (selectedTags.length > 0) {
                  const otherSelectedTags = selectedTags.filter(
                    (t) => t !== type
                  );

                  if (otherSelectedTags.length > 0) {
                    availableVideos = videos.filter((video) =>
                      otherSelectedTags.every((selectedTag) =>
                        video.tags.includes(selectedTag)
                      )
                    );
                  }
                }

                // Appliquer le filtre de recherche si présent
                if (searchQuery.trim() !== "") {
                  const query = searchQuery.toLowerCase();
                  availableVideos = availableVideos.filter(
                    (video) =>
                      video.titre.toLowerCase().includes(query) ||
                      (video.description &&
                        video.description.toLowerCase().includes(query))
                  );
                }

                // Maintenant compter seulement les vidéos disponibles qui ont ce tag
                const count = availableVideos.filter((video) =>
                  video.tags.includes(type)
                ).length;

                return (
                  <TagCheckbox
                    key={type}
                    type={type}
                    count={<NumberFlow value={count} />}
                    selected={selectedTags.includes(type)}
                    onToggle={toggleTag}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] max-w-[1440px] mx-auto">
        {isVisuallyLoading ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {/* Génération de 6 cartes squelettes pour les vidéos */}
            {[...Array(6)].map((_, index) => (
              <div
                key={`video-skeleton-${index}`}
                className="rounded-sm overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  {/* Placeholder pour la miniature vidéo (ratio 16:9) */}
                  <div className="relative w-full aspect-video bg-orange-50 rounded-sm">
                    {/* Icône de lecture au centre */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-orange-500/50"></div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    {/* Placeholder pour le titre */}
                    <div className="w-3/4 h-6 bg-orange-50 rounded-md"></div>
                    {/* Placeholders pour les tags */}
                    <div className="flex gap-2 mt-1">
                      <div className="w-16 h-5 bg-orange-50 rounded-full"></div>
                      <div className="w-20 h-5 bg-orange-50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : filteredVideos.length > 0 ? (
          <AnimatePresence>
            <motion.div
              key={filteredVideos.length}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
                hidden: {},
              }}
            >
              {filteredVideos.map((video) => (
                <motion.div
                  key={video.id_vid}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <VideoItem
                    id={video.id_vid}
                    title={video.titre}
                    url={video.lien}
                    tags={video.tags}
                    pageCurrent="creations"
                    date={video.date}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex flex-col justify-center items-center py-10">
            <p className="text-xl text-orange-500 font-general-medium">
              Aucun contenu disponible pour le moment 😢
            </p>
            <p className="text-base text-black">
              Essayez de revenir plus tard ou ajustez vos filtres 🔍
            </p>
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-25 bg-gradient-to-t from-orange-500/0 to-orange-500/60 pointer-events-none -z-10"></div>
    </main>
  );
}
