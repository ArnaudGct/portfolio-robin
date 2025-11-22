"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import NumberFlow from "@number-flow/react";
import AlbumsGallery from "./../../src/sections/Photos/AlbumsGallery";
import {
  X,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  SquareArrowOutUpRight,
  Loader2,
} from "lucide-react";
import ButtonMain from "./../../src/components/ButtonMain";
import ButtonSecondary from "./../../src/components/ButtonSecondary";
import Tag from "./../../src/components/Tag";
import TagCheckbox from "./../../src/components/TagCheckbox";
import Link from "next/link";

// Données factices pour les albums
const MOCK_ALBUMS = [
  {
    id_alb: 1,
    titre: "Voyage à Paris",
    lien_cover:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    tags: ["Voyage", "Urbain", "Architecture"],
    photos: [
      {
        id_pho: 1,
        titre: "Tour Eiffel",
        lien_low:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop",
        lien_high:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop",
        alt: "Vue de la Tour Eiffel",
        largeur: 1920,
        hauteur: 1080,
        tags: ["Voyage", "Urbain", "Architecture"],
        tags_recherche: ["Paris", "Monument", "France"],
        date: "2024-03-15",
      },
      {
        id_pho: 2,
        titre: "Louvre",
        lien_low:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&h=300&fit=crop",
        lien_high:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&h=1080&fit=crop",
        alt: "Musée du Louvre",
        largeur: 1920,
        hauteur: 1080,
        tags: ["Voyage", "Urbain", "Architecture"],
        tags_recherche: ["Paris", "Musée", "France"],
        date: "2024-03-16",
      },
    ],
  },
  {
    id_alb: 2,
    titre: "Nature et Paysages",
    lien_cover:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    tags: ["Nature", "Paysage"],
    photos: [
      {
        id_pho: 3,
        titre: "Montagne",
        lien_low:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        lien_high:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
        alt: "Paysage de montagne",
        largeur: 1920,
        hauteur: 1080,
        tags: ["Nature", "Paysage"],
        tags_recherche: ["Montagne", "Alpes"],
        date: "2024-06-20",
      },
      {
        id_pho: 4,
        titre: "Forêt",
        lien_low:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
        lien_high:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop",
        alt: "Forêt dense",
        largeur: 1920,
        hauteur: 1080,
        tags: ["Nature", "Paysage"],
        tags_recherche: ["Forêt", "Arbres"],
        date: "2024-06-21",
      },
    ],
  },
  {
    id_alb: 3,
    titre: "Portrait Studio",
    lien_cover:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop",
    tags: ["Portrait", "Studio"],
    photos: [
      {
        id_pho: 5,
        titre: "Portrait 1",
        lien_low:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=300&fit=crop",
        lien_high:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&h=1080&fit=crop",
        alt: "Portrait studio femme",
        largeur: 1920,
        hauteur: 1080,
        tags: ["Portrait", "Studio"],
        tags_recherche: ["Modèle", "Photo"],
        date: "2024-09-10",
      },
    ],
  },
  {
    id_alb: 4,
    titre: "Architecture Moderne",
    lien_cover:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
    tags: ["Architecture", "Urbain"],
    photos: [
      {
        id_pho: 6,
        titre: "Gratte-ciel",
        lien_low:
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=300&fit=crop",
        lien_high:
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&h=1080&fit=crop",
        alt: "Gratte-ciel moderne",
        largeur: 1920,
        hauteur: 1080,
        tags: ["Architecture", "Urbain"],
        tags_recherche: ["Bâtiment", "Ville"],
        date: "2024-08-05",
      },
      {
        id_pho: 7,
        titre: "Pont moderne",
        lien_low:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=300&fit=crop",
        lien_high:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop",
        alt: "Pont architectural",
        largeur: 1920,
        hauteur: 1080,
        tags: ["Architecture", "Urbain"],
        tags_recherche: ["Pont", "Structure"],
        date: "2024-08-06",
      },
    ],
  },
];

// Données factices pour les photos hors albums
const MOCK_PHOTOS = [
  {
    id_pho: 8,
    titre: "Coucher de soleil",
    lien_low:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500&h=300&fit=crop",
    lien_high:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1920&h=1080&fit=crop",
    alt: "Beau coucher de soleil",
    largeur: 1920,
    hauteur: 1080,
    tags: ["Nature", "Paysage"],
    tags_recherche: ["Soleil", "Ciel"],
    date: "2024-07-15",
  },

  {
    id_pho: 10,
    titre: "Café parisien",
    lien_low:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&h=300&fit=crop",
    lien_high:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=1920&h=1080&fit=crop",
    alt: "Terrasse de café à Paris",
    largeur: 1920,
    hauteur: 1080,
    tags: ["Voyage", "Urbain"],
    tags_recherche: ["Café", "Terrasse", "Paris"],
    date: "2024-04-10",
  },
  {
    id_pho: 11,
    titre: "Fleurs sauvages",
    lien_low:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=300&fit=crop",
    lien_high:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&h=1080&fit=crop",
    alt: "Champ de fleurs",
    largeur: 1920,
    hauteur: 1080,
    tags: ["Nature"],
    tags_recherche: ["Fleurs", "Printemps"],
    date: "2024-05-01",
  },
  {
    id_pho: 12,
    titre: "Architecture ancienne",
    lien_low:
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=500&h=300&fit=crop",
    lien_high:
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1920&h=1080&fit=crop",
    alt: "Bâtiment historique",
    largeur: 1920,
    hauteur: 1080,
    tags: ["Architecture", "Voyage"],
    tags_recherche: ["Histoire", "Monument"],
    date: "2024-06-05",
  },
  {
    id_pho: 13,
    titre: "Plage tropicale",
    lien_low:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop",
    lien_high:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop",
    alt: "Plage avec palmiers",
    largeur: 1920,
    hauteur: 1080,
    tags: ["Nature", "Voyage"],
    tags_recherche: ["Plage", "Mer", "Vacances"],
    date: "2024-07-20",
  },
  {
    id_pho: 14,
    titre: "Marché local",
    lien_low:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&h=300&fit=crop",
    lien_high:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&h=1080&fit=crop",
    alt: "Étals de marché",
    largeur: 1920,
    hauteur: 1080,
    tags: ["Voyage", "Urbain"],
    tags_recherche: ["Marché", "Commerce"],
    date: "2024-08-15",
  },
  {
    id_pho: 15,
    titre: "Nuit étoilée",
    lien_low:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=300&fit=crop",
    lien_high:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    alt: "Ciel étoilé",
    largeur: 1920,
    hauteur: 1080,
    tags: ["Nature", "Paysage"],
    tags_recherche: ["Étoiles", "Nuit"],
    date: "2024-09-01",
  },
];

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [modalImageLoading, setModalImageLoading] = useState(true);
  const [highResLoaded, setHighResLoaded] = useState(false);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [photoLoadingState, setPhotoLoadingState] = useState({});
  const [isAlbumsLoading, setIsAlbumsLoading] = useState(true);
  const [albumImageLoadingStates, setAlbumImageLoadingStates] = useState({});
  const [isVisuallyLoading, setIsVisuallyLoading] = useState(true);
  const [isAlbumsVisuallyLoading, setIsAlbumsVisuallyLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  useEffect(() => {
    const loadPhotos = () => {
      try {
        setIsLoading(true);
        setIsVisuallyLoading(true);

        const cleanedData = MOCK_PHOTOS.map((photo) => {
          const tagsRecherche = photo.tags_recherche || [];

          return {
            ...photo,
            allTags: photo.tags || [],
            allTagsSearch: [
              ...new Set([...(photo.tags || []), ...tagsRecherche]),
            ],
            date: photo.date ? new Date(photo.date) : null,
          };
        });

        setPhotos(cleanedData);
        setFilteredPhotos(cleanedData);

        // Marquer que le chargement réel est terminé
        setIsLoading(false);

        // Imposer un délai minimum pour l'affichage du skeleton
        const minLoadingTime = 300;
        setTimeout(() => {
          setIsVisuallyLoading(false);
        }, minLoadingTime);
      } catch (err) {
        console.error("Erreur lors de la récupération des photos:", err);
        setIsLoading(false);
      }
    };

    const loadAlbums = () => {
      try {
        setIsAlbumsLoading(true);
        setIsAlbumsVisuallyLoading(true);
        setAlbums(MOCK_ALBUMS);

        // Marquer que le chargement réel est terminé
        setIsAlbumsLoading(false);

        // Imposer un délai minimum pour l'affichage du skeleton
        const minLoadingTime = 300;
        setTimeout(() => {
          setIsAlbumsVisuallyLoading(false);
        }, minLoadingTime);
      } catch (err) {
        console.error("Erreur lors de la récupération des albums:", err);
        setIsAlbumsLoading(false);
      }
    };

    loadPhotos();
    loadAlbums();
  }, []);

  useEffect(() => {
    const tagsFromPhotos = photos.flatMap((p) => p.allTags || []);
    const tagsFromAlbums = albums.flatMap((a) => a.tags || []);
    const uniqueTags = Array.from(
      new Set([...tagsFromPhotos, ...tagsFromAlbums])
    ).sort();

    setAllTags(uniqueTags);
  }, [photos, albums]);

  // Améliorer la fonction resetLoadingStates pour réinitialiser TOUS les états de chargement
  const resetLoadingStates = () => {
    // Réinitialiser immédiatement les skeletons pour qu'ils n'apparaissent pas lors du filtrage
    setIsVisuallyLoading(false);
    setIsAlbumsVisuallyLoading(false);

    // IMPORTANT: Ne plus réinitialiser les états de chargement des images individuelles
    // pour éviter de refaire charger les images déjà chargées
    // setAlbumImageLoadingStates({});
    // setPhotoLoadingState({});
  };

  // Modifier le useEffect de filtrage pour mieux gérer les états de chargement
  useEffect(() => {
    // Si on est en train de filtrer (pas le chargement initial), réinitialiser d'abord les skeletons
    if (!isVisuallyLoading || !isAlbumsVisuallyLoading) {
      resetLoadingStates();
    }

    let resultPhotos = [...photos];
    let resultAlbums = [...albums];
    if (selectedTags.length > 0) {
      resultPhotos = resultPhotos.filter((photo) =>
        selectedTags.every((tag) =>
          // Vérifier que allTagsSearch existe avant de l'utiliser
          (photo.allTagsSearch || []).includes(tag)
        )
      );

      resultAlbums = resultAlbums.filter((album) =>
        selectedTags.every((tag) =>
          // Vérifier que tags existe avant de l'utiliser
          (album.tags || []).includes(tag)
        )
      );
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();

      // Recherche dans les photos
      resultPhotos = resultPhotos.filter((photo) => {
        // Vérifier aussi le titre en plus des tags
        const titleMatch =
          photo.titre && photo.titre.toLowerCase().includes(query);
        const tagsMatch = (photo.allTagsSearch || []).some((tag) =>
          (tag || "").toLowerCase().includes(query)
        );
        return titleMatch || tagsMatch;
      });

      // Recherche dans les albums
      resultAlbums = resultAlbums.filter((album) => {
        const titleMatch =
          album.titre && album.titre.toLowerCase().includes(query);
        const tagsMatch = (album.tags || []).some((tag) =>
          (tag || "").toLowerCase().includes(query)
        );
        return titleMatch || tagsMatch;
      });
    }

    // Après avoir défini filteredPhotos et filteredAlbums, initialiser états de chargement
    setFilteredPhotos(resultPhotos);
    setFilteredAlbums(resultAlbums);

    // SUPPRIMER complètement ce setTimeout qui réinitialise les états de chargement
    // et le remplacer par une initialisation intelligente SEULEMENT pour les nouveaux éléments

    // Pour les albums filtrés, initialiser les états de chargement
    if (resultAlbums.length > 0) {
      setAlbumImageLoadingStates((prevState) => {
        const newState = { ...prevState };

        resultAlbums.forEach((album) => {
          // SEULEMENT si l'album n'existe pas encore dans l'état, l'initialiser
          if (newState[album.id_alb] === undefined) {
            newState[album.id_alb] = true; // true = en cours de chargement
          }
        });

        return newState;
      });
    }

    // Pour les photos filtrées, ne créer des états de chargement que pour les NOUVELLES photos
    if (resultPhotos.length > 0) {
      setPhotoLoadingState((prevState) => {
        const newState = { ...prevState };

        resultPhotos.forEach((photo) => {
          // SEULEMENT si la photo n'existe pas encore dans l'état, l'initialiser
          if (newState[photo.id_pho] === undefined) {
            newState[photo.id_pho] = true; // true = en cours de chargement pour les nouvelles photos
          }
          // Si la photo existe déjà, ne RIEN faire (garde son état actuel)
        });

        return newState;
      });
    }
  }, [photos, albums, selectedTags, searchQuery]);

  // Ajouter une fonction pour nettoyer les états de chargement des éléments qui ne sont plus affichés
  useEffect(() => {
    // Nettoyer les états de chargement des albums qui ne sont plus dans les résultats filtrés
    setAlbumImageLoadingStates((prevState) => {
      const newState = { ...prevState };
      const currentAlbumIds = filteredAlbums.map((album) => album.id_alb);

      // Garder seulement les états des albums actuellement affichés
      Object.keys(newState).forEach((albumId) => {
        if (!currentAlbumIds.includes(parseInt(albumId))) {
          delete newState[albumId];
        }
      });

      return newState;
    });

    // Nettoyer les états de chargement des photos qui ne sont plus dans les résultats filtrés
    setPhotoLoadingState((prevState) => {
      const newState = { ...prevState };
      const currentPhotoIds = filteredPhotos.map((photo) => photo.id_pho);

      // Garder seulement les états des photos actuellement affichées
      Object.keys(newState).forEach((photoId) => {
        if (!currentPhotoIds.includes(parseInt(photoId))) {
          delete newState[photoId];
        }
      });

      return newState;
    });
  }, [filteredAlbums, filteredPhotos]);

  // Simplifier la fonction handleAlbumImageLoad
  const handleAlbumImageLoad = (albumId) => {
    setAlbumImageLoadingStates((prev) => ({
      ...prev,
      [albumId]: false, // false = chargement terminé
    }));
  };

  // Ajouter cette fonction pour gérer le chargement des photos
  const handlePhotoLoad = (photoId) => {
    setPhotoLoadingState((prev) => ({
      ...prev,
      [photoId]: false, // false = chargement terminé
    }));
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleImageClick = (index) => {
    setCurrentPhotoIndex(index);
    setIsModalOpen(true);
    setModalImageLoading(true);
    setHighResLoaded(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPhotoIndex(null);
    setHighResLoaded(false);
  };

  const handleNextPhoto = () => {
    if (currentPhotoIndex < filteredPhotos.length - 1) {
      setModalImageLoading(true);
      setHighResLoaded(false);
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setModalImageLoading(true);
      setHighResLoaded(false);
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const handleLowResLoad = () => {
    setModalImageLoading(false);
  };

  const handleHighResLoad = () => {
    setHighResLoaded(true);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-16 mb-20">
      <div className="border border-solid border-b border-t border-r-0 border-l-0 border-gray-50 w-full">
        <div className="flex flex-col gap-6 md:gap-4 w-[95%] max-w-[1440px] mx-auto py-8">
          <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col">
              {isVisuallyLoading ? (
                <>
                  <div className="h-8 w-80 bg-blue-100/40 rounded-md mb-2"></div>
                  <div className="h-6 w-72 bg-blue-100/40 rounded-md"></div>
                </>
              ) : (
                <>
                  <p className="text-4xl font-extrabold font-clash-bold text-orange-600">
                    <NumberFlow
                      value={
                        // Additionne toutes les photos des albums filtrés + les photos filtrées hors album
                        filteredAlbums.reduce(
                          (acc, album) => acc + (album.photos?.length || 0),
                          0
                        ) +
                        filteredPhotos.filter(
                          (photo) =>
                            // Si la photo n'est pas dans un album filtré
                            !filteredAlbums.some((album) =>
                              album.photos?.some(
                                (p) => p.id_pho === photo.id_pho
                              )
                            )
                        ).length
                      }
                    />{" "}
                    <span className="font-clash-light text-black">
                      photo
                      {filteredAlbums.reduce(
                        (acc, album) => acc + (album.photos?.length || 0),
                        0
                      ) +
                        filteredPhotos.filter(
                          (photo) =>
                            !filteredAlbums.some((album) =>
                              album.photos?.some(
                                (p) => p.id_pho === photo.id_pho
                              )
                            )
                        ).length >
                      1
                        ? "s"
                        : ""}
                    </span>
                  </p>
                </>
              )}
            </div>
            <div className="w-full md:w-auto relative">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Rechercher une photo ou album..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 px-4 bg-gray-200  dark:placeholder:text-orange-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600 md:w-64 lg:w-96"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              // Au lieu de compter sur tous les éléments, compter seulement sur les éléments filtrés
              let availablePhotos = photos;
              let availableAlbums = albums;

              // Si des tags sont sélectionnés, filtrer d'abord par les autres tags (excluant le tag actuel)
              if (selectedTags.length > 0) {
                const otherSelectedTags = selectedTags.filter((t) => t !== tag);

                if (otherSelectedTags.length > 0) {
                  availablePhotos = photos.filter((photo) =>
                    otherSelectedTags.every((selectedTag) =>
                      (photo.allTagsSearch || []).includes(selectedTag)
                    )
                  );

                  availableAlbums = albums.filter((album) =>
                    otherSelectedTags.every((selectedTag) =>
                      (album.tags || []).includes(selectedTag)
                    )
                  );
                }
              }

              // Appliquer le filtre de recherche si présent
              if (searchQuery.trim() !== "") {
                const query = searchQuery.toLowerCase().trim();

                availablePhotos = availablePhotos.filter((photo) => {
                  const titleMatch =
                    photo.titre && photo.titre.toLowerCase().includes(query);
                  const tagsMatch = (photo.allTagsSearch || []).some(
                    (photoTag) => (photoTag || "").toLowerCase().includes(query)
                  );
                  return titleMatch || tagsMatch;
                });

                availableAlbums = availableAlbums.filter((album) => {
                  const titleMatch =
                    album.titre && album.titre.toLowerCase().includes(query);
                  const tagsMatch = (album.tags || []).some((albumTag) =>
                    (albumTag || "").toLowerCase().includes(query)
                  );
                  return titleMatch || tagsMatch;
                });
              }

              // Maintenant compter seulement les éléments disponibles qui ont ce tag
              const photoCount = availablePhotos.filter((photo) =>
                (photo.allTags || []).includes(tag)
              ).length;

              const albumCount = availableAlbums.filter((album) =>
                (album.tags || []).includes(tag)
              ).length;

              const totalCount = photoCount + albumCount;

              return (
                <TagCheckbox
                  key={tag}
                  type={tag}
                  count={<NumberFlow value={totalCount} />}
                  selected={selectedTags.includes(tag)}
                  onToggle={toggleTag}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[95%] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6">
          {/* Albums */}
          {isAlbumsVisuallyLoading ? (
            <motion.div
              className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {/* Génération de 4 cartes squelettes pour les albums */}
              {[...Array(4)].map((_, index) => (
                <div
                  key={`album-skeleton-${index}`}
                  className="rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col gap-4 rounded-lg">
                    <div className="relative h-52 w-full overflow-hidden rounded-lg bg-blue-100/40"></div>
                    <div className="w-full flex flex-col gap-3">
                      <div className="w-3/4 h-6 bg-blue-100/40 rounded-md"></div>
                      <div className="w-1/4 h-4 bg-blue-100/40 rounded-md"></div>
                      <div className="flex gap-2 mt-1">
                        <div className="w-16 h-5 bg-blue-100/40 rounded-full"></div>
                        <div className="w-20 h-5 bg-blue-100/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : filteredAlbums.length > 0 ? (
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4"
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
                {filteredAlbums.map((album) => (
                  <motion.div
                    key={`album-${album.id_alb}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="rounded-lg overflow-hidden group"
                  >
                    <Link
                      href={`/photos/album/${album.id_alb}`}
                      className="cursor-pointer"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="relative h-52 w-full overflow-hidden rounded-lg bg-slate-100">
                          {album.photos.length > 0 ? (
                            <div className="absolute inset-0 w-full h-full">
                              {/* Loader pendant le chargement */}
                              {albumImageLoadingStates[album.id_alb] !==
                                false && (
                                <div className="absolute inset-0 z-20 bg-slate-100 flex items-center justify-center">
                                  <div className="flex flex-col items-center gap-3">
                                    <Loader2 className="h-8 w-8 text-orange-600 animate-spin" />
                                    <p className="text-sm text-orange-600 font-medium">
                                      Chargement de l'aperçu...
                                    </p>
                                  </div>
                                </div>
                              )}

                              {/* Image composite */}
                              <div
                                className={`w-full h-full transition-all duration-500 ${
                                  albumImageLoadingStates[album.id_alb] ===
                                  false
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-95"
                                } transition-transform duration-500 group-hover:scale-105`}
                              >
                                <Image
                                  src={album.lien_cover}
                                  alt={`Aperçu de l'album ${album.titre}`}
                                  fill
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                  priority={false}
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                  className="object-cover rounded-lg"
                                  onLoad={() =>
                                    handleAlbumImageLoad(album.id_alb)
                                  }
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <p className="text-slate-400">Aucune photo</p>
                            </div>
                          )}
                        </div>

                        {/* Rest of the album UI */}
                        <div className="group w-full flex items-center justify-between">
                          <div className="w-[90%] flex flex-col gap-2">
                            <div className="flex flex-col">
                              <p className="w-full text-xl font-general-medium text-black truncate">
                                {album.titre}
                              </p>
                              <span className="text-sm text-orange-600">
                                {album.photos.length} photo
                                {album.photos.length > 1 ? "s" : ""}
                              </span>
                            </div>

                            {album.tags.length > 0 && (
                              <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                                {album.tags.map((t, index) => (
                                  <Tag
                                    key={`${t}-${index}`}
                                    className="text-xs"
                                  >
                                    {t}
                                  </Tag>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="flex justify-center items-center p-2 text-orange-600 min-w-9 w-[10%] hover:text-black transition-colors">
                            <SquareArrowOutUpRight
                              size={16}
                              strokeWidth={1.75}
                              className="group-hover:text-black transition-colors duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          ) : null}

          {/* Photos */}

          {isVisuallyLoading ? (
            <motion.div
              className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-10"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {/* Génération de 8 cartes squelettes pour les photos */}
              {[...Array(8)].map((_, index) => (
                <div
                  key={`photo-skeleton-${index}`}
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-blue-100/40"
                ></div>
              ))}
            </motion.div>
          ) : filteredPhotos.length > 0 ? (
            <AnimatePresence>
              <motion.div
                key="photo-grid"
                className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4"
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
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={`photo-${photo.id_pho}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group cursor-pointer overflow-hidden rounded-lg relative"
                    onClick={() => handleImageClick(index)}
                  >
                    {/* Spinner qui s'affiche pendant le chargement */}
                    {photoLoadingState[photo.id_pho] && (
                      <div className="absolute inset-0 bg-blue-50 rounded-lg z-10">
                        <div className="w-full h-full bg-blue-100/60 animate-pulse rounded-lg"></div>
                      </div>
                    )}
                    <Image
                      src={photo.lien_low}
                      alt={photo.alt}
                      width={500}
                      height={300}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      priority={false}
                      className={`w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 ${
                        photoLoadingState[photo.id_pho]
                          ? "opacity-0"
                          : "opacity-100 transition-opacity duration-300"
                      }`}
                      onLoad={() => handlePhotoLoad(photo.id_pho)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
        {!isAlbumsLoading &&
          !isLoading &&
          // Ajout d'une condition pour vérifier que le chargement initial est terminé
          photos.length > 0 && // Si les données ont été chargées au moins une fois
          filteredAlbums.length === 0 &&
          filteredPhotos.length === 0 && (
            <div className="flex flex-col justify-center items-center py-10">
              <p className="text-xl text-orange-600 font-general-medium">
                Aucun contenu disponible pour le moment 😢
              </p>
              <p className="text-base text-black">
                Essayez de revenir plus tard ou ajustez vos filtres 🔍
              </p>
            </div>
          )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && currentPhotoIndex !== null && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="absolute inset-0 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col bg-white rounded-sm overflow-hidden shadow-2xl m-4 md:m-6 lg:m-8"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4,
              }}
            >
              <ButtonMain
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 w-fit p-3"
              >
                <X size={16} strokeWidth={2} />
              </ButtonMain>

              <div className="relative flex-grow flex items-center justify-center bg-white overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center p-4 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  key={`photo-${currentPhotoIndex}`}
                >
                  {/* Spinner pour l'image modale */}
                  {modalImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
                      <Loader2 className="h-12 w-12 text-orange-600 animate-spin" />
                    </div>
                  )}

                  {/* Indicateur de chargement HD */}
                  {!modalImageLoading && !highResLoaded && (
                    <div className="absolute top-4 left-4 z-20 bg-orange-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Chargement HD...
                    </div>
                  )}

                  {/* Image basse résolution - affichée en premier */}
                  <Image
                    src={filteredPhotos[currentPhotoIndex].lien_low}
                    alt={filteredPhotos[currentPhotoIndex].alt}
                    width={filteredPhotos[currentPhotoIndex].largeur}
                    height={filteredPhotos[currentPhotoIndex].hauteur}
                    className={`max-w-[90%] max-h-[calc(90vh-10rem)] object-contain absolute ${
                      highResLoaded
                        ? "opacity-0 transition-opacity duration-500"
                        : "opacity-100"
                    }`}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    priority={false}
                    onLoad={handleLowResLoad}
                  />

                  {/* Image haute résolution - se superpose */}
                  {!modalImageLoading && (
                    <Image
                      src={filteredPhotos[currentPhotoIndex].lien_high}
                      alt={filteredPhotos[currentPhotoIndex].alt}
                      width={Math.floor(
                        filteredPhotos[currentPhotoIndex].largeur
                      )}
                      height={Math.floor(
                        filteredPhotos[currentPhotoIndex].hauteur
                      )}
                      className={`max-w-[90%] max-h-[calc(90vh-10rem)] object-contain absolute ${
                        highResLoaded
                          ? "opacity-100 transition-opacity duration-500"
                          : "opacity-0"
                      }`}
                      onLoad={handleHighResLoad}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      priority={false}
                    />
                  )}
                </motion.div>
              </div>

              <div className="flex flex-col gap-2 py-4 border-t border-gray-50">
                <motion.div
                  className="flex justify-center items-center gap-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <ButtonSecondary
                    onClick={handlePrevPhoto}
                    icon={<ArrowLeft size={20} strokeWidth={1.75} />}
                    isDisabled={currentPhotoIndex === 0}
                    className={`${
                      currentPhotoIndex === 0 ? "opacity-40" : "opacity-100"
                    }`}
                  />

                  <span className="text-orange-600 font-medium">
                    {currentPhotoIndex + 1} / {filteredPhotos.length}
                  </span>

                  <ButtonSecondary
                    onClick={handleNextPhoto}
                    isDisabled={currentPhotoIndex === filteredPhotos.length - 1}
                    icon={<ArrowRight size={20} strokeWidth={1.75} />}
                    className={` w-fit
                     ${
                       currentPhotoIndex === filteredPhotos.length - 1
                         ? "opacity-40"
                         : "opacity-100"
                     }`}
                  />
                </motion.div>

                <div
                  className="flex flex-col md:flex-row justify-start md:justify-between px-4 bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-2 mt-2">
                    {filteredPhotos[currentPhotoIndex].tags.map(
                      (tag, tagIndex) => (
                        <div
                          key={`${tag}-${tagIndex}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.5 + tagIndex * 0.05,
                            duration: 0.2,
                          }}
                        >
                          <Tag className="text-xs">{tag}</Tag>
                        </div>
                      )
                    )}
                  </div>

                  {filteredPhotos[currentPhotoIndex].date && (
                    <div
                      className="mt-4 text-sm text-orange-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      <p>
                        Ajoutée le{" "}
                        {filteredPhotos[
                          currentPhotoIndex
                        ].date.toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute top-0 left-0 w-full h-25 bg-gradient-to-t from-orange-500/0 to-orange-500/60 pointer-events-none -z-10"></div>
    </main>
  );
}
