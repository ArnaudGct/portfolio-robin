import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tagsRoles = await prisma.autres_tags_roles.findMany({
      orderBy: {
        ordre: "asc",
      },
    });

    return NextResponse.json(tagsRoles);
  } catch (error) {
    console.error("Erreur lors de la récupération des tags roles:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des tags roles" },
      { status: 500 },
    );
  }
}
