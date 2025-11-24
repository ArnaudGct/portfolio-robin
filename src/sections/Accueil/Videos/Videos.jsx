"use client";
import { useState, useEffect } from "react";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import VideoItem from "./VideoItem";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/accueil/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Erreur lors du chargement des vidéos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

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
          {/* <ButtonMain href="/videos" className="w-fit">
            Voir plus
          </ButtonMain> */}
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Chargement...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {videos.map((video) => (
              <VideoItem
                key={video.id}
                id={video.id.toString()}
                title={video.title}
                tags={video.tags}
                url={video.url}
                date={video.date}
                pageCurrent="accueil"
              />
            ))}
          </div>
        )}
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
