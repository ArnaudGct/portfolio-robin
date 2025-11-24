import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const etudes = await prisma.apropos_etudes.findMany({
      where: { afficher: true },
      orderBy: { date_debut: "desc" },
      select: {
        id_etu: true,
        date_debut: true,
        date_fin: true,
        titre: true,
        nom_ecole: true,
        lien_ecole: true,
      },
    });

    return NextResponse.json(etudes);
  } catch (error) {
    console.error("Erreur lors de la récupération des études:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
