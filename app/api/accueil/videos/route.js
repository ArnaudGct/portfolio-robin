import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const videos = await prisma.videos.findMany({
      where: {
        afficher_section_videos: true,
        afficher: true,
      },
      include: {
        videos_tags_link: {
          include: {
            videos_tags: true,
          },
        },
      },
      orderBy: {
        date: "desc",
      },
      take: 6,
    });

    const formattedVideos = videos.map((video) => {
      // Récupérer tous les tags de la vidéo
      const allTags = video.videos_tags_link.map(
        (link) => link.videos_tags.titre
      );

      // Récupérer le tag spécifique pour la section si tag_section_videos est défini
      let sectionTag = null;
      if (video.tag_section_videos) {
        const tagLink = video.videos_tags_link.find(
          (link) => link.id_tags === video.tag_section_videos
        );
        if (tagLink) {
          sectionTag = tagLink.videos_tags.titre;
        }
      }

      return {
        id: video.id_vid,
        title: video.titre,
        tags: sectionTag ? [sectionTag] : allTags,
        url: `https://www.youtube.com/watch?v=${video.lien}`,
        date: video.date,
      };
    });

    return NextResponse.json(formattedVideos);
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des vidéos" },
      { status: 500 }
    );
  }
}
