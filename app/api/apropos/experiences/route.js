import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const experiences = await prisma.apropos_experiences.findMany({
      where: { afficher: true },
      orderBy: { date_debut: "desc" },
      select: {
        id_exp: true,
        date_debut: true,
        date_fin: true,
        titre: true,
        nom_entreprise: true,
        lien_entreprise: true,
      },
    });

    return NextResponse.json(experiences);
  } catch (error) {
    console.error("Erreur lors de la récupération des expériences:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
