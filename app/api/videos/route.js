import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const videos = await prisma.videos.findMany({
      where: { afficher: true },
      orderBy: { date: "desc" },
      select: {
        id_vid: true,
        titre: true,
        lien: true,
        date: true,
        afficher: true,
      },
    });

    // Récupérer les tags liés à chaque vidéo
    const videoIds = videos.map((v) => v.id_vid);
    const links = await prisma.videos_tags_link.findMany({
      where: { id_vid: { in: videoIds } },
      include: { videos_tags: true },
    });

    const tagsByVideo = {};
    links.forEach((link) => {
      if (!tagsByVideo[link.id_vid]) tagsByVideo[link.id_vid] = [];
      if (link.videos_tags && link.videos_tags.titre) {
        tagsByVideo[link.id_vid].push(link.videos_tags.titre);
      }
    });

    const result = videos.map((v) => ({
      ...v,
      tags: tagsByVideo[v.id_vid] || [],
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
