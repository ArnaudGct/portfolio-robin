"use client";

import Link from "next/link";
import SvgIcon from "@/src/components/SvgIcon";

export default function SocialLink({
  href,
  icon: Icon,
  iconSrc,
  text,
  bgColor,
  textColor,
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex gap-3 items-center ${bgColor} rounded-sm py-3.5 px-8 w-fit cursor-pointer`}
    >
      {iconSrc ? (
        <SvgIcon
          src={iconSrc}
          alt={text}
          width={24}
          height={24}
          color="#F2572B"
        />
      ) : Icon ? (
        <Icon className={textColor} />
      ) : null}
      <p className={`${textColor} font-general-semibold text-lg`}>{text}</p>
    </Link>
  );
}
