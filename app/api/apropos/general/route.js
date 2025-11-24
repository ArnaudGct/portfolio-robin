import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.apropos_general.findFirst({
      select: {
        id_gen: true,
        photo: true,
        photo_alt: true,
        description: true,
      },
    });

    if (!data) {
      return NextResponse.json(
        { error: "Aucune donnée trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération de apropos_general:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
