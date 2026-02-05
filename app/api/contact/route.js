import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const contacts = await prisma.autres_contact.findMany({
      orderBy: {
        ordre: "asc",
      },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Erreur lors de la récupération des contacts:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des contacts" },
      { status: 500 },
    );
  }
}
