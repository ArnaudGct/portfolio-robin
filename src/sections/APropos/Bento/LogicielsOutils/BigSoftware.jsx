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
  titleStyle,
  descriptionStyle,
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex gap-3 items-center cursor-pointer"
    >
      {imageSrc && (
        <div className="w-10 h-10 relative">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-contain w-full h-full"
          />
        </div>
      )}
      <div className="flex flex-col">
        <p
          className={`font-general-semibold text-lg ${titleColor || ""}`}
          style={titleStyle}
        >
          {title}
        </p>
        <p
          className={`${descriptionColor || ""} text-sm`}
          style={descriptionStyle}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
