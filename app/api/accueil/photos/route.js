import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const photos = await prisma.photos.findMany({
      where: {
        afficher_carrousel_photos: true,
        afficher: true,
      },
      orderBy: {
        date: "desc",
      },
      select: {
        id_pho: true,
        lien_low: true,
        lien_high: true,
        largeur: true,
        hauteur: true,
        alt: true,
      },
    });

    return NextResponse.json(photos);
  } catch (error) {
    console.error("Erreur lors de la récupération des photos:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des photos" },
      { status: 500 }
    );
  }
}
