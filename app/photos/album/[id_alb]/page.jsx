// app/creations/album/[id_alb]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import AlbumsGallery from "./../../../../src/sections/Photos/AlbumsGallery";
import Breadcrumb from "./../../../../src/components/Breadcrumb";

// Données factices pour les albums
const MOCK_ALBUMS = [
  {
    id_alb: 1,
    titre: "Voyage à Paris",
    description:
      "Une collection de photos capturées lors de mon voyage à Paris, explorant l'architecture emblématique et la vie urbaine de la capitale française.",
    date: "2024-03-15T00:00:00.000Z",
    photos_albums_link: [
      {
        photos: {
          lien_low:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop",
          lien_high:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop",
          largeur: 1920,
          hauteur: 1080,
          alt: "Vue de la Tour Eiffel",
          afficher: true,
        },
      },
      {
        photos: {
          lien_low:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&h=300&fit=crop",
          lien_high:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&h=1080&fit=crop",
          largeur: 1920,
          hauteur: 1080,
          alt: "Musée du Louvre",
          afficher: true,
        },
      },
    ],
    photos_albums_tags_link: [
      { photos_tags: { id_tags: 1, titre: "Voyage" } },
      { photos_tags: { id_tags: 2, titre: "Urbain" } },
      { photos_tags: { id_tags: 3, titre: "Architecture" } },
    ],
  },
  {
    id_alb: 2,
    titre: "Nature et Paysages",
    description:
      "Des panoramas naturels à couper le souffle, des montagnes majestueuses aux forêts luxuriantes.",
    date: "2024-06-20T00:00:00.000Z",
    photos_albums_link: [
      {
        photos: {
          lien_low:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
          lien_high:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
          largeur: 1920,
          hauteur: 1080,
          alt: "Paysage de montagne",
          afficher: true,
        },
      },
      {
        photos: {
          lien_low:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
          lien_high:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop",
          largeur: 1920,
          hauteur: 1080,
          alt: "Forêt dense",
          afficher: true,
        },
      },
    ],
    photos_albums_tags_link: [
      { photos_tags: { id_tags: 4, titre: "Nature" } },
      { photos_tags: { id_tags: 5, titre: "Paysage" } },
    ],
  },
  {
    id_alb: 3,
    titre: "Portrait Studio",
    description: "Séance de portraits en studio avec éclairage professionnel.",
    date: "2024-09-10T00:00:00.000Z",
    photos_albums_link: [
      {
        photos: {
          lien_low:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=300&fit=crop",
          lien_high:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&h=1080&fit=crop",
          largeur: 1920,
          hauteur: 1080,
          alt: "Portrait studio femme",
          afficher: true,
        },
      },
    ],
    photos_albums_tags_link: [
      { photos_tags: { id_tags: 6, titre: "Portrait" } },
      { photos_tags: { id_tags: 7, titre: "Studio" } },
    ],
  },
  {
    id_alb: 4,
    titre: "Architecture Moderne",
    description:
      "Exploration de l'architecture contemporaine et des structures urbaines innovantes.",
    date: "2024-08-05T00:00:00.000Z",
    photos_albums_link: [
      {
        photos: {
          lien_low:
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=300&fit=crop",
          lien_high:
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&h=1080&fit=crop",
          largeur: 1920,
          hauteur: 1080,
          alt: "Gratte-ciel moderne",
          afficher: true,
        },
      },
      {
        photos: {
          lien_low:
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=300&fit=crop",
          lien_high:
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop",
          largeur: 1920,
          hauteur: 1080,
          alt: "Pont architectural",
          afficher: true,
        },
      },
    ],
    photos_albums_tags_link: [
      { photos_tags: { id_tags: 3, titre: "Architecture" } },
      { photos_tags: { id_tags: 2, titre: "Urbain" } },
    ],
  },
];

async function getAlbumDetails(id_alb) {
  // Simuler un délai de chargement
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Trouver l'album correspondant à l'ID
  const album = MOCK_ALBUMS.find((alb) => alb.id_alb === parseInt(id_alb));

  return album || null;
}

export default async function AlbumDetails({ params }) {
  const { id_alb } = await params;
  const album = await getAlbumDetails(id_alb);

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const formatted = new Intl.DateTimeFormat("fr-FR", {
      month: "long",
      year: "numeric",
    }).format(date);

    // Capitaliser la première lettre
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  if (!album) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-semibold text-gray-500">
          Album non trouvé
        </h2>
        <Link
          href="/photos"
          className="mt-4 flex items-center gap-2 text-orange-500 transition-colors"
        >
          <ArrowLeft size={16} /> Retour aux albums
        </Link>
      </div>
    );
  }

  return (
    <main className="flex flex-col w-[95%] mx-auto max-w-[1440px] mb-20">
      <div className="flex flex-col gap-10 pt-10 pb-20">
        <Breadcrumb
          pages={[
            { name: "Mes photos", path: "/photos" },
            { name: album.titre, path: `/photos/album/${album.id_alb}` },
          ]}
        />

        <AlbumsGallery album={album} />
      </div>
      <div className="absolute top-0 left-0 w-full h-25 bg-gradient-to-t from-orange-500/0 to-orange-500/60 pointer-events-none -z-10"></div>
    </main>
  );
}
