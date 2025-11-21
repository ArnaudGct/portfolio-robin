"use client";

import Image from "next/image";
import Link from "next/link";

export default function BigSoftware({
  href,
  imageSrc,
  altText,
  title,
  description,
  titleColor,
  descriptionColor,
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex gap-3 items-center cursor-pointer"
    >
      <div className="w-10 h-10 relative">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <p className={`font-general-semibold ${titleColor} text-lg`}>{title}</p>
        <p className={`${descriptionColor} text-sm`}>{description}</p>
      </div>
    </Link>
  );
}
