"use client";

import Tag from "@/src/components/Tag";
import Link from "next/link";

const etudes = [
  {
    date: "Août 2022 - Dec 2025",
    titre: "Cinématographie et production de films / vidéos",
    ecole: "3IS Education",
  },
  {
    date: "Sept 2021 - Août 2022",
    titre: "Prépa BTS Audiovisuelle",
    ecole: "Saint Genes Lassalle",
  },
  {
    date: "Mars 2024",
    titre: "Réalisation audiovisuelle communication et publicité",
    ecole: "Agence Marée Montante",
  },
];

export default function Etudes() {
  return (
    <div className="flex flex-col gap-8 w-fit">
      <Tag className="w-fit">Mes expériences</Tag>
      <div className="relative">
        <div className="border-l-2 border-orange-300 absolute left-2 top-0 bottom-0"></div>
        <div className="flex flex-col gap-10">
          {etudes.map((etude, index) => (
            <div key={index} className="relative flex items-center">
              <div className="absolute left-0.5 top-6 w-3.5 h-3.5 bg-orange-500"></div>
              <div className="ml-10 flex flex-col gap-4">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-6">
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-col">
                      <p className="text-gray-100 text-sm">{etude.date}</p>
                      <p className="text-black text-lg font-general-semibold">
                        {etude.titre}
                      </p>
                      <p className="text-orange-500 rounded-sm bg-orange-50 w-fit px-3 py-1 font-general-semibold text-xs">
                        {etude.ecole}
                      </p>
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
