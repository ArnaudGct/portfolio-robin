"use client";

import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Sud Ouest",
    logo: "/clients/sud-ouest.webp",
    url: "https://www.sudouest.fr/",
  },
  {
    name: "TV7",
    logo: "/clients/tv7.webp",
    url: "https://www.sudouest.fr/lachainetv7/",
  },
  {
    name: "Marée Montante",
    logo: "/clients/maree-montante.webp",
    url: "https://www.mareemontante.fr/",
  },
  {
    name: "BatiFemmes",
    logo: "/clients/batifemmes.webp",
    url: "https://www.mareemontante.fr/",
  },
  // {
  //   name: "Yamaha",
  //   logo: "/clients/yamaha.webp",
  //   url: "https://www.yamaha-motor.eu/fr/fr/home/",
  // },
  {
    name: "Video Danse",
    logo: "/clients/video-danse.webp",
    url: "",
  },
];

export default function Clients() {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12 sm:gap-8 items-center justify-center">
        {clients.map((client, index) => (
          <Link
            key={index}
            href={client.url}
            target="_blank"
            className="flex justify-center items-center cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={200}
              height={48}
              className="max-h-10 object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
