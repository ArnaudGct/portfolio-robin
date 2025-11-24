import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const accueilData = await prisma.accueil_general.findFirst();

    if (!accueilData) {
      return NextResponse.json(
        { error: "Aucune donnée trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(accueilData);
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
