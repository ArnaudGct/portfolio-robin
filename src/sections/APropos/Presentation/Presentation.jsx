"use client";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import { Pin } from "./../../../components/icons/Icons";
import Tag from "@/src/components/Tag";

export default function Presentation() {
  return (
    <section className="relative flex py-8 border-t-1 border-b-1 border-dashed border-gray-300 overflow-hidden">
      <div className="w-[95%] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-20">
        <Image
          src="/photo_robin_regie.webp"
          alt="Photo de Robin"
          width={800}
          height={600}
          className="w-full md:w-[40%] h-[500px] object-cover rounded-sm object-right"
        />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-4xl text-black font-clash-regular">
                Je m'appelle{" "}
                <span className="font-clash-bold text-orange-500 tracking-normal">
                  Robin Augez
                </span>
              </p>
              <div className="flex items-center gap-1.5">
                <Tag>Réalisateur</Tag>
                <Tag>Cadreur</Tag>
                <Tag>Monteur vidéo</Tag>
              </div>
            </div>

            <p>
              Magna dolor laboris labore elit ullamco ad ut sit et reprehenderit
              minim minim quis fugiat anim. Occaecat dolore cillum excepteur
              Lorem aliqua commodo culpa nisi sint exercitation.
              <br />
              <br />
              Excepteur est exercitation do id velit dolore dolor amet.
              Consectetur pariatur proident non mollit ut Lorem aute et nostrud
              sint. Cillum commodo ipsum excepteur labore esse enim Lorem nisi
              excepteur anim in do anim labore dolor.
            </p>
          </div>
          {/* <ButtonMain href="/apropos" className="w-fit">
            En savoir plus
          </ButtonMain> */}
        </div>
        <div
          className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-60"
          style={{
            backgroundImage: "url(/grid_2.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "450px",
            backgroundPosition: "top",
          }}
        ></div>
      </div>
    </section>
  );
}
