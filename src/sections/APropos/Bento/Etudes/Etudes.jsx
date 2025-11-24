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

export default function Etudes() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchEtudes = async () => {
      try {
        const res = await fetch("/api/apropos/etudes");
        if (!res.ok) {
          console.error("Erreur fetching etudes:", res.status);
          return;
        }
        const data = await res.json();
        if (!mounted) return;
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erreur lors de la récupération des études:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchEtudes();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 w-fit">
      <Tag className="w-fit">Mes études</Tag>
      {loading ? (
        <div className="relative">
          <div className="border-l-2 border-gray-200 absolute left-2 top-0 bottom-0"></div>
          <div className="flex flex-col gap-10">
            {[1, 2].map((i) => (
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
            {items.map((etude, index) => (
              <div
                key={etude.id_etu || index}
                className="relative flex items-center"
              >
                <div className="absolute left-0.5 top-6 w-3.5 h-3.5 bg-orange-500"></div>
                <div className="ml-10 flex flex-col gap-4">
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-6">
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex flex-col">
                        <p className="text-gray-100 text-sm">
                          {formatDateRange(etude.date_debut, etude.date_fin)}
                        </p>
                        <p className="text-black text-lg font-general-semibold">
                          {etude.titre}
                        </p>
                        {etude.lien_ecole ? (
                          <Link
                            href={etude.lien_ecole}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 rounded-sm bg-orange-50 w-fit px-3 py-1 font-general-semibold text-xs"
                          >
                            {etude.nom_ecole}
                          </Link>
                        ) : (
                          <p className="text-orange-500 rounded-sm bg-orange-50 w-fit px-3 py-1 font-general-semibold text-xs">
                            {etude.nom_ecole}
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
