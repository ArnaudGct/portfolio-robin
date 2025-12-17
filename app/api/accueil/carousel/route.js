import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Récupérer les vidéos avec afficher_carrousel_main = true
    const videos = await prisma.videos.findMany({
      where: {
        afficher_carrousel_main: true,
        afficher: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    // Récupérer les photos avec afficher_carrousel_main = true
    const photos = await prisma.photos.findMany({
      where: {
        afficher_carrousel_main: true,
        afficher: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    // Créer un tableau mixte d'items pour le carousel en alternant photos et vidéos
    const carouselItems = [];

    // Grouper les vidéos par paires
    const videoPairs = [];
    for (let i = 0; i < videos.length; i += 2) {
      const videoPair = {
        type: "videos",
        videos: [
          {
            id: videos[i].lien,
            title: videos[i].titre,
          },
        ],
      };

      // Ajouter la deuxième vidéo si elle existe
      if (i + 1 < videos.length) {
        videoPair.videos.push({
          id: videos[i + 1].lien,
          title: videos[i + 1].titre,
        });
      }

      videoPairs.push(videoPair);
    }

    // Alterner entre images et paires de vidéos (image, vidéos, image, vidéos, ...)
    const maxLength = Math.max(photos.length, videoPairs.length);

    for (let i = 0; i < maxLength; i++) {
      // Ajouter une image
      if (i < photos.length) {
        carouselItems.push({
          type: "image",
          src: photos[i].lien_high,
          alt: photos[i].alt,
        });
      }

      // Ajouter une paire de vidéos
      if (i < videoPairs.length) {
        carouselItems.push(videoPairs[i]);
      }
    }

    return NextResponse.json(carouselItems);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données du carousel:",
      error
    );
    return NextResponse.json(
      { error: "Erreur lors de la récupération des données" },
      { status: 500 }
    );
  }
}
