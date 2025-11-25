"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/accueil/clients");
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Erreur lors du chargement des clients:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  // Calcul dynamique des colonnes selon le nombre de clients
  const gridClasses = useMemo(() => {
    const count = clients.length;

    // Grille responsive optimisée selon le nombre d'éléments
    switch (count) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-3";
      case 4:
        return "grid-cols-2 sm:grid-cols-4";
      case 5:
        return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
      case 6:
        return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";
      case 7:
        return "grid-cols-2 sm:grid-cols-4 lg:grid-cols-7";
      case 8:
        return "grid-cols-2 sm:grid-cols-4 lg:grid-cols-8";
      case 9:
        return "grid-cols-3 sm:grid-cols-3 lg:grid-cols-9";
      case 10:
        return "grid-cols-2 sm:grid-cols-5 lg:grid-cols-10";
      case 11:
        return "grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11";
      case 12:
        return "grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12";
      default:
        // Pour plus de 12, on utilise une grille flexible qui s'adapte
        if (count <= 15) {
          return "grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8";
        } else if (count <= 20) {
          return "grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10";
        } else {
          return "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12";
        }
    }
  }, [clients.length]);

  return (
    <section className="w-[95%] max-w-[1440px] mx-auto flex flex-col gap-8">
      <div className="flex items-end gap-4">
        <div className="flex w-fit whitespace-nowrap">
          <p className="text-3xl text-black font-clash-regular">
            Ils m'ont fait{" "}
            <span className="font-clash-bold text-orange-500 tracking-normal">
              confiance.
            </span>
          </p>
        </div>
        <span className="flex-1 h-[1px] bg-gray-300 mb-1.5"></span>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Skeleton des logos clients */}
          {[...Array(6)].map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="flex justify-center items-center py-2"
            >
              <div className="h-10 w-full max-w-32 bg-orange-50 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`grid ${gridClasses} gap-6 sm:gap-8`}>
          {clients.map((client, index) => {
            const imageElement = (
              <Image
                src={client.logo}
                alt={client.alt}
                width={200}
                height={48}
                className="max-h-10 w-auto object-contain"
              />
            );

            return client.url ? (
              <Link
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center py-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {imageElement}
              </Link>
            ) : (
              <div
                key={index}
                className="flex justify-center items-center py-2 grayscale opacity-70"
              >
                {imageElement}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
