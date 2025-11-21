"use client";

import Tag from "@/src/components/Tag";
import Link from "next/link";

const experiences = [
  {
    date: "Aujourd'hui",
    titre: "Vidéaste en freelance",
    entreprise: "CosmoseProd",
    site: "",
  },
  {
    date: "Sept 2024 - Aujourd'hui",
    titre: "Réalisateur audiovisuel",
    entreprise: "TV7",
    site: "https://www.sudouest.fr/lachainetv7/",
  },
  {
    date: "Mars 2024",
    titre: "Réalisation audiovisuelle communication et publicité",
    entreprise: "Agence Marée Montante",
    site: "https://www.mareemontante.fr/",
  },
  {
    date: "Janvier 2023",
    titre: "Réalisateur de documentaire",
    entreprise: "VisioSaturne Productions",
    site: "https://www.visiosaturne.com/",
  },
];

export default function Experiences() {
  return (
    <div className="flex flex-col gap-8 w-fit">
      <Tag className="w-fit">Mes expériences</Tag>
      <div className="relative">
        <div className="border-l-2 border-orange-300 absolute left-2 top-0 bottom-0"></div>
        <div className="flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-center">
              <div className="absolute left-0.5 top-6 w-3.5 h-3.5 bg-orange-500"></div>
              <div className="ml-10 flex flex-col gap-4">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-6">
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-col">
                      <p className="text-gray-100 text-sm">{experience.date}</p>
                      <p className="text-black text-lg font-general-semibold">
                        {experience.titre}
                      </p>
                      {experience.site ? (
                        <Link
                          href={experience.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 rounded-sm bg-orange-50 w-fit px-3 py-1 font-general-semibold text-xs"
                        >
                          {experience.entreprise}
                        </Link>
                      ) : (
                        <p className="text-orange-500 rounded-sm bg-orange-50 w-fit px-3 py-1 font-general-semibold text-xs">
                          {experience.entreprise}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
