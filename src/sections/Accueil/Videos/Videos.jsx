"use client";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import VideoItem from "./VideoItem";

export default function Videos() {
  return (
    <section className="relative flex overflow-hidden">
      <div className="relative w-[95%] py-16 sm:py-20 max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-16 sm:gap-8">
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:justify-between sm:items-center w-full sm:gap-12">
          <div className="flex flex-col">
            <div className="flex w-fit">
              <p className="text-2xl text-black font-clash-bold">
                Création de{" "}
                <span className="text-orange-500 tracking-normal">vidéos</span>{" "}
                et{" "}
                <span className="text-orange-500 tracking-normal">
                  d'émissions.
                </span>
              </p>
            </div>
            <p className="text-gray-100">
              Des histoires visuelles qui brillent dans le cosmos.
            </p>
          </div>
          <ButtonMain href="/videos" className="w-fit">
            Voir plus
          </ButtonMain>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Ligne 1 */}
          <VideoItem
            id="1"
            title="Vidéo 1"
            tags={["Tag1", "Tag2"]}
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            pageCurrent="accueil"
          />
          <VideoItem
            id="2"
            title="Vidéo 2"
            tags={["Tag3"]}
            url="https://www.youtube.com/watch?v=3JZ_D3ELwOQ"
            pageCurrent="accueil"
          />
          <VideoItem
            id="3"
            title="Vidéo 3"
            tags={[]}
            url="https://www.youtube.com/watch?v=V-_O7nl0Ii0"
            pageCurrent="accueil"
          />
          {/* Ligne 2 */}
          <VideoItem
            id="4"
            title="Vidéo 4"
            tags={["Tag4", "Tag5"]}
            url="https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
            pageCurrent="accueil"
          />
          <VideoItem
            id="5"
            title="Vidéo 5"
            tags={["Tag6"]}
            url="https://www.youtube.com/watch?v=l482T0yNkeo"
            pageCurrent="accueil"
          />
          <VideoItem
            id="6"
            title="Vidéo 6"
            tags={[]}
            url="https://www.youtube.com/watch?v=9bZkp7q19f0"
            pageCurrent="accueil"
          />
        </div>
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
    </section>
  );
}
