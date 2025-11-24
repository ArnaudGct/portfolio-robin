import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const albums = await prisma.photos_albums.findMany({
      where: {
        afficher: true,
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
      orderBy: {
        date: "desc",
      },
    });

    // Formater les données pour le frontend
    const formattedAlbums = albums.map((album) => ({
      id_alb: album.id_alb,
      titre: album.titre,
      lien_cover: album.lien_cover,
      date: album.date,
      tags: album.photos_albums_tags_link.map((link) => link.photos_tags.titre),
      photos: album.photos_albums_link.map((link) => ({
        id_pho: link.photos.id_pho,
        lien_low: link.photos.lien_low,
        lien_high: link.photos.lien_high,
        largeur: link.photos.largeur,
        hauteur: link.photos.hauteur,
        alt: link.photos.alt,
        date: link.photos.date,
        tags: link.photos.photos_tags_link.map((t) => t.photos_tags.titre),
        tags_recherche: link.photos.photos_tags_recherche_link.map(
          (t) => t.photos_tags_recherche.titre
        ),
      })),
    }));

    return NextResponse.json(formattedAlbums);
  } catch (error) {
    console.error("Erreur lors de la récupération des albums:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des albums" },
      { status: 500 }
    );
  }
}
