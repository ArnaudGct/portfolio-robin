"use client";

import Tag from "@/src/components/Tag";
import Link from "next/link";
import { useEffect, useState } from "react";

function formatDateRange(start, end) {
  if (!start && !end) return "";
  const opts = { month: "short", year: "numeric" };
  try {
    const s = start ? new Date(start) : null;
    const e = end ? new Date(end) : null;
    const df = new Intl.DateTimeFormat("fr-FR", opts);
    if (s && e) {
      return `${df.format(s)} - ${df.format(e)}`;
    }
    if (s && !e) {
      return `${df.format(s)} - Aujourd'hui`;
    }
    if (!s && e) {
      return `${df.format(e)}`;
    }
  } catch (err) {
    return "";
  }
  return "";
}

const experiences = [];

export default function Experiences() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchExperiences = async () => {
      try {
        const res = await fetch("/api/apropos/experiences");
        if (!res.ok) {
          console.error("Erreur fetching experiences:", res.status);
          return;
        }
        const data = await res.json();
        if (!mounted) return;
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erreur lors de la récupération des expériences:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchExperiences();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 w-fit">
      <Tag className="w-fit">Mes expériences</Tag>
      {loading ? (
        <div className="relative">
          <div className="border-l-2 border-gray-200 absolute left-2 top-0 bottom-0"></div>
          <div className="flex flex-col gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative flex items-center">
                <div className="absolute left-0.5 top-6 w-3.5 h-3.5 bg-orange-50 animate-pulse"></div>
                <div className="ml-10 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="h-4 bg-orange-50 rounded w-32 animate-pulse"></div>
                    <div className="h-5 bg-orange-50 rounded w-48 animate-pulse"></div>
                    <div className="h-6 bg-orange-50 rounded-sm w-36 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="border-l-2 border-orange-300 absolute left-2 top-0 bottom-0"></div>
          <div className="flex flex-col gap-10">
            {items.map((experience, index) => (
              <div
                key={experience.id_exp || index}
                className="relative flex items-center"
              >
                <div className="absolute left-0.5 top-6 w-3.5 h-3.5 bg-orange-500"></div>
                <div className="ml-10 flex flex-col gap-4">
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-6">
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex flex-col">
                        <p className="text-gray-100 text-sm">
                          {formatDateRange(
                            experience.date_debut,
                            experience.date_fin
                          )}
                        </p>
                        <p className="text-black text-lg font-general-semibold">
                          {experience.titre}
                        </p>
                        {experience.lien_entreprise ? (
                          <Link
                            href={experience.lien_entreprise}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 rounded-sm bg-orange-50 w-fit px-3 py-1 font-general-semibold text-xs"
                          >
                            {experience.nom_entreprise}
                          </Link>
                        ) : (
                          <p className="text-orange-500 rounded-sm bg-orange-50 w-fit px-3 py-1 font-general-semibold text-xs">
                            {experience.nom_entreprise}
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
      )}
    </div>
  );
}
