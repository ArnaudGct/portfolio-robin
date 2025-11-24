"use client";

import Image from "next/image";
import Link from "next/link";

export default function LittleSoftware({
  href,
  imageSrc,
  altText,
  bgColor,
  textColor,
  bgStyle,
  textStyle,
  children,
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex gap-2 rounded-sm items-center justify-center py-1 px-3 w-fit ${
        bgColor || ""
      } cursor-pointer`}
      style={bgStyle}
    >
      {imageSrc && (
        <div className="w-6 h-6 relative">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-contain w-full h-full"
          />
        </div>
      )}
      <p
        className={`${textColor || ""} font-general-semibold`}
        style={textStyle}
      >
        {children}
      </p>
    </Link>
  );
}
