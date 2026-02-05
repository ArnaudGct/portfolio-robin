"use client";
import Image from "next/image";
import Tag from "./../components/Tag";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, LinkedIn } from "@/src/components/icons/Icons";
import { useEffect, useState } from "react";
import SvgIcon from "@/src/components/SvgIcon";

export default function Footer() {
  const pathname = usePathname();
  const [generalData, setGeneralData] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchGeneralData = async () => {
      try {
        const response = await fetch("/api/general");
        const data = await response.json();
        setGeneralData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données générales:",
          error,
        );
      }
    };

    const fetchContacts = async () => {
      try {
        const response = await fetch("/api/contact");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des contacts:", error);
      }
    };

    fetchGeneralData();
    fetchContacts();
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <footer className="bg-black w-full mt-auto">
      <div className="flex flex-col justify-center items-start gap-12 py-16 w-[95%] max-w-[1440px] mx-auto">
        <div className="w-full flex flex-col justify-center items-start lg:flex-row lg:justify-between lg:items-center gap-12">
          <div className="flex flex-col gap-8 items-start justify-start">
            <div className="flex gap-4 items-center justify-start">
              <div className="flex flex-col gap-8 items-start justify-start">
                <div>
                  <p className="text-orange-500 text-2xl font-normal font-clash-bold">
                    CosmoseProd.
                  </p>
                  <p className="text-gray-50">
                    Entreprise de productions audiovisuelles
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex gap-2">
                    {contacts.map((contact) => (
                      <Link
                        key={contact.id_contact}
                        href={contact.lien}
                        target="_blank"
                        className="flex gap-2 items-center group"
                      >
                        <SvgIcon
                          src={contact.logo}
                          alt={contact.nom}
                          width={24}
                          height={24}
                          color="rgb(249 250 251)"
                          className="group-hover:text-orange-500"
                        />
                      </Link>
                    ))}
                  </div>
                  {generalData?.email && (
                    <Link
                      href={`mailto:${generalData.email}`}
                      className="underline text-white"
                    >
                      {generalData.email}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start lg:items-end justify-start">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 items-start justify-start">
              <li>
                <Link
                  href="/"
                  className={isActive("/") ? "text-orange-500" : "text-gray-50"}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/apropos"
                  className={
                    isActive("/apropos") ? "text-orange-500" : "text-gray-50"
                  }
                  aria-current={isActive("/apropos") ? "page" : undefined}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className={
                    isActive("/videos") ? "text-orange-500" : "text-gray-50"
                  }
                  aria-current={isActive("/videos") ? "page" : undefined}
                >
                  Vidéos
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className={
                    isActive("/photos") ? "text-orange-500" : "text-gray-50"
                  }
                  aria-current={isActive("/photos") ? "page" : undefined}
                >
                  Photos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center sm:flex-row sm:justify-between gap-4">
          <div>
            <p className="text-gray-100 text-xs">
              © {new Date().getFullYear()} CosmoseProd – Tous droits réservés
            </p>
            <p className="text-gray-100 text-xs">
              Ce site a été designé et développé par{" "}
              <Link
                href="https://arnaudgct.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Arnaud Graciet
              </Link>
              .
            </p>
          </div>
          <div>
            <Link
              href="/mentions-legales"
              className={
                isActive("/mentions-legales")
                  ? "text-orange-500 text-xs"
                  : "text-gray-100 text-xs"
              }
              aria-current={isActive("/mentions-legales") ? "page" : undefined}
            >
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
