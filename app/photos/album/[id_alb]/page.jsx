// app/creations/album/[id_alb]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import AlbumsGallery from "./../../../../src/sections/Photos/AlbumsGallery";
import Breadcrumb from "./../../../../src/components/Breadcrumb";

async function getAlbumDetails(id_alb) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3002"
      }/api/photos/albums/${id_alb}`,
      {
        cache: "no-store", // Pour avoir toujours les données à jour
      }
    );

    if (!response.ok) {
      return null;
    }

    const album = await response.json();
    return album;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'album:", error);
    return null;
  }
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
