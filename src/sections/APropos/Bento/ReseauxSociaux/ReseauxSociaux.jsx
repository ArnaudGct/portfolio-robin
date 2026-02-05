"use client";

import Tag from "@/src/components/Tag";
import Link from "next/link";
import SocialLink from "./SocialLink";
import { Instagram, LinkedIn } from "./../../../../components/icons/Icons";
import { useState, useEffect } from "react";

export default function ReseauxSociaux() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("/api/contact");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="flex flex-col gap-8 w-fit items-start md:items-end lg:items-start">
      <Tag className="w-fit">Mes réseaux sociaux</Tag>
      <div className="flex flex-wrap gap-3 justify-start md:justify-end lg:justify-start">
        {contacts.map((contact) => (
          <SocialLink
            key={contact.id_contact}
            href={contact.lien}
            iconSrc={contact.logo}
            text={contact.nom_profil}
            bgColor="bg-orange-50"
            textColor="text-orange-500"
          />
        ))}
      </div>
    </div>
  );
}
