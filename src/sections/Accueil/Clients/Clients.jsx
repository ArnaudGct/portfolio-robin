"use client";

import { useState, useEffect } from "react";
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
        <div className="flex justify-center items-center h-32">
          <p>Chargement...</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 gap-y-12 sm:gap-8 items-center justify-between">
          {clients.map((client, index) => {
            const imageElement = (
              <Image
                src={client.logo}
                alt={client.alt}
                width={200}
                height={48}
                className="max-h-10 object-contain"
              />
            );

            return client.url ? (
              <Link
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {imageElement}
              </Link>
            ) : (
              <div
                key={index}
                className="flex justify-center items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
