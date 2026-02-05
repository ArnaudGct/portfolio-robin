import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.autres_general.findFirst();

    if (!data) {
      return NextResponse.json(
        { error: "Aucune donnée trouvée" },
        { status: 404 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données générales:",
      error,
    );
    return NextResponse.json(
      { error: "Erreur lors de la récupération des données" },
      { status: 500 },
    );
  }
}
