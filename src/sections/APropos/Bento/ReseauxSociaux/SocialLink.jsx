"use client";

import Link from "next/link";

export default function SocialLink({
  href,
  icon: Icon,
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
      <Icon className={textColor} />
      <p className={`${textColor} font-general-semibold text-lg`}>{text}</p>
    </Link>
  );
}
