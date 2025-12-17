import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const { id_alb } = await params;

    const album = await prisma.photos_albums.findUnique({
      where: {
        id_alb: parseInt(id_alb),
      },
      include: {
        photos_albums_link: {
          include: {
            photos: {
              include: {
                photos_tags_link: {
                  include: {
                    photos_tags: true,
                  },
                },
                photos_tags_recherche_link: {
                  include: {
                    photos_tags_recherche: true,
                  },
                },
              },
            },
          },
          orderBy: {
            position: "asc",
          },
        },
        photos_albums_tags_link: {
          include: {
            photos_tags: true,
          },
        },
      },
    });

    if (!album || !album.afficher) {
      return NextResponse.json({ error: "Album non trouvé" }, { status: 404 });
    }

    // Filtrer les photos affichées
    const filteredPhotosLinks = album.photos_albums_link.filter(
      (link) => link.photos.afficher
    );

    // Formater les données pour le frontend (compatible avec AlbumsGallery)
    const formattedAlbum = {
      id_alb: album.id_alb,
      titre: album.titre,
      date: album.date,
      description: "", // Ajouter si vous avez ce champ dans la base
      photos_albums_link: filteredPhotosLinks.map((link) => ({
        photos: {
          id_pho: link.photos.id_pho,
          lien_low: link.photos.lien_low,
          lien_high: link.photos.lien_high,
          largeur: link.photos.largeur,
          hauteur: link.photos.hauteur,
          alt: link.photos.alt,
          afficher: link.photos.afficher,
        },
      })),
      photos_albums_tags_link: album.photos_albums_tags_link.map((link) => ({
        photos_tags: {
          id_tags: link.photos_tags.id_tags,
          titre: link.photos_tags.titre,
        },
      })),
    };

    return NextResponse.json(formattedAlbum);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'album:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération de l'album" },
      { status: 500 }
    );
  }
}
