"use client";

import Tag from "@/src/components/Tag";
import Image from "next/image";
import Link from "next/link";
import LittleSoftware from "./LittleSoftware";
import BigSoftware from "./BigSoftware";

export default function LogicielsOutils() {
  return (
    <div className="flex flex-col gap-4">
      <Tag className="w-fit">Mes logiciels et outils</Tag>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <BigSoftware
            href="https://www.adobe.com/fr/products/premiere.html"
            imageSrc="/materiels/softwares/premiere_pro.webp"
            altText="Premiere Pro"
            title="Premiere Pro"
            description="Logiciel de montage vidéo de Adobe"
            titleColor="text-[#00005B]"
            descriptionColor="text-[#B3B3D1]"
          />
          <BigSoftware
            href="https://www.blackmagicdesign.com/fr/products/davinciresolve/studio"
            imageSrc="/materiels/softwares/resolve.webp"
            altText="Resolve"
            title="DaVinci Resolve Studio"
            description="Logiciel de montage vidéo de Blackmagic"
            titleColor="text-[#30C1EC]"
            descriptionColor="text-[#B3CAD1]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <LittleSoftware
            href="https://www.swisstransfer.com/fr-fr"
            imageSrc="/materiels/softwares/swisstransfer.webp"
            altText="SwissTransfer"
            bgColor="bg-[#D5EFE1]"
            textColor="text-[#3CB572]"
          >
            SwissTransfer
          </LittleSoftware>
          <LittleSoftware
            href="https://frame.io/home"
            imageSrc="/materiels/softwares/frameio.webp"
            altText="Frame.io"
            bgColor="bg-[#D7D5EF]"
            textColor="text-[#716AFF]"
          >
            Frame.io
          </LittleSoftware>
        </div>
      </div>
    </div>
  );
}
