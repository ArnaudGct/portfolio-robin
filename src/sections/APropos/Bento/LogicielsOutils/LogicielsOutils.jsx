"use client";

import Tag from "@/src/components/Tag";
import LittleSoftware from "./LittleSoftware";
import BigSoftware from "./BigSoftware";
import { useEffect, useState } from "react";

export default function LogicielsOutils() {
  const [outils, setOutils] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchOutils = async () => {
      try {
        const res = await fetch("/api/apropos/outils");
        if (!res.ok) {
          console.error("Erreur fetching outils:", res.status);
          return;
        }
        const data = await res.json();
        if (!mounted) return;
        setOutils(data || []);
      } catch (err) {
        console.error("Erreur lors de la récupération des outils:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchOutils();

    return () => {
      mounted = false;
    };
  }, []);

  const detaille = outils.filter((o) => o.type_outil === "detaille");
  const simple = outils.filter((o) => o.type_outil === "simple");

  return (
    <div className="flex flex-col gap-4">
      <Tag className="w-fit">Mes logiciels et outils</Tag>
      {loading ? (
        <div className="flex flex-col gap-3">
          {/* Skeleton pour les logiciels détaillés */}
          <div className="flex flex-col gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
          {/* Skeleton pour les petits logiciels */}
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-8 w-24 bg-gray-200 rounded-sm animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            {detaille.map((outil) => (
              <BigSoftware
                key={outil.id_outil}
                href={outil.lien}
                imageSrc={outil.icone}
                altText={outil.icone_alt}
                title={outil.titre}
                description={outil.description}
                titleStyle={
                  outil.couleur_titre
                    ? { color: outil.couleur_titre }
                    : undefined
                }
                descriptionStyle={
                  outil.couleur_description
                    ? { color: outil.couleur_description }
                    : undefined
                }
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {simple.map((outil) => (
              <LittleSoftware
                key={outil.id_outil}
                href={outil.lien}
                imageSrc={outil.icone}
                altText={outil.icone_alt}
                bgStyle={
                  outil.couleur_fond
                    ? { backgroundColor: outil.couleur_fond }
                    : undefined
                }
                textStyle={
                  outil.couleur_titre
                    ? { color: outil.couleur_titre }
                    : undefined
                }
              >
                {outil.titre}
              </LittleSoftware>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
