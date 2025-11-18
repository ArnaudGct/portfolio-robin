"use client";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import { Pin } from "./../../../components/icons/Icons";

export default function Presentation() {
  return (
    <section className="flex py-8 border-t-1 border-b-1 border-dashed border-gray-300 overflow-hidden">
      <div className="w-[95%] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-20">
        <Image
          src="/photo_robin.png"
          alt="Photo de Robin"
          width={800}
          height={600}
          className="w-full md:w-[40%] h-[500px] object-cover rounded-sm"
        />
        <div className="relative flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-4xl text-black font-clash-regular">
                Robin{" "}
                <span className="font-clash-bold text-orange-500 tracking-normal">
                  Augez
                </span>
              </p>
              <div className="flex items-center gap-1.5">
                <Pin className="text-orange-500" />
                <p className="text-orange-500">
                  <span className="font-bold">Bordeaux</span> (+ déplacement
                  dans toute la France)
                </p>
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
          <div
            className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[150%] h-[140%] pointer-events-none -z-10"
            style={{
              backgroundImage: "url(/dot_grid.svg)",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
