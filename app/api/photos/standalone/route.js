import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Récupérer toutes les photos qui ne sont liées à aucun album
    const photos = await prisma.photos.findMany({
      where: {
        afficher: true,
        photos_albums_link: {
          none: {}, // Photos qui n'ont aucune liaison avec un album
        },
      },
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
      orderBy: {
        date: "desc",
      },
    });

    // Formater les données pour le frontend
    const formattedPhotos = photos.map((photo) => ({
      id_pho: photo.id_pho,
      lien_low: photo.lien_low,
      lien_high: photo.lien_high,
      largeur: photo.largeur,
      hauteur: photo.hauteur,
      alt: photo.alt,
      date: photo.date,
      tags: photo.photos_tags_link.map((link) => link.photos_tags.titre),
      tags_recherche: photo.photos_tags_recherche_link.map(
        (link) => link.photos_tags_recherche.titre
      ),
    }));

    return NextResponse.json(formattedPhotos);
  } catch (error) {
    console.error("Erreur lors de la récupération des photos:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des photos" },
      { status: 500 }
    );
  }
}
