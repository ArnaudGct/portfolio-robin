import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const faqs = await prisma.faq.findMany({
      where: {
        afficher: true,
      },
      orderBy: {
        id_faq: "asc",
      },
      select: {
        id_faq: true,
        titre: true,
        contenu: true,
      },
    });

    return NextResponse.json(faqs);
  } catch (error) {
    console.error("Erreur lors de la récupération des FAQs:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des FAQs" },
      { status: 500 }
    );
  }
}
