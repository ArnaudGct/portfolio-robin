import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const outils = await prisma.apropos_outils.findMany({
      where: {
        afficher: true,
      },
      orderBy: {
        ordre: "asc",
      },
      select: {
        id_outil: true,
        type_outil: true,
        titre: true,
        description: true,
        icone: true,
        icone_alt: true,
        icone_rounded: true,
        lien: true,
        couleur_fond: true,
        couleur_titre: true,
        couleur_description: true,
      },
    });

    return NextResponse.json(outils);
  } catch (error) {
    console.error("Erreur lors de la récupération des outils:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
