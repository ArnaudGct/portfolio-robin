import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const clients = await prisma.accueil_clients.findMany({
      where: {
        afficher: true,
      },
      orderBy: {
        id_client: "asc",
      },
    });

    const formattedClients = clients.map((client) => ({
      name: client.client,
      logo: client.logo,
      alt: client.alt_logo,
      url: client.lien_client,
    }));

    return NextResponse.json(formattedClients);
  } catch (error) {
    console.error("Erreur lors de la récupération des clients:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des clients" },
      { status: 500 }
    );
  }
}
