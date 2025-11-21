"use client";

import Tag from "@/src/components/Tag";
import Link from "next/link";
import SocialLink from "./SocialLink";
import { Instagram, LinkedIn } from "./../../../../components/icons/Icons";

export default function ReseauxSociaux() {
  return (
    <div className="flex flex-col gap-8 w-fit items-start md:items-end lg:items-start">
      <Tag className="w-fit">Mes réseaux sociaux</Tag>
      <div className="flex flex-wrap gap-3 justify-start md:justify-end lg:justify-start">
        <SocialLink
          href="https://www.instagram.com/robin_agz/"
          icon={Instagram}
          text="robin_agz"
          bgColor="bg-orange-50"
          textColor="text-orange-500"
        />
        <SocialLink
          href="https://www.linkedin.com/in/robin-augez/"
          icon={LinkedIn}
          text="Robin Augez"
          bgColor="bg-orange-50"
          textColor="text-orange-500"
        />
      </div>
    </div>
  );
}
