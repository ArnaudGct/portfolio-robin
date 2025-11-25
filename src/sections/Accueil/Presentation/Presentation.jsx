"use client";
import { useState, useEffect } from "react";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Pin } from "./../../../components/icons/Icons";

export default function Presentation() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/accueil/general");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="flex py-8 border-t-1 border-b-1 border-dashed border-gray-300 overflow-hidden">
        <div className="w-[95%] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-20">
          {/* Skeleton de l'image */}
          <div className="w-full md:w-[40%] h-[500px] bg-orange-50 rounded-sm animate-pulse"></div>

          {/* Skeleton du contenu */}
          <div className="relative flex flex-col gap-12 flex-1">
            <div className="flex flex-col gap-4">
              {/* Skeleton du nom */}
              <div>
                <div className="h-10 bg-orange-50 rounded w-48 animate-pulse mb-2"></div>
                {/* Skeleton de la localisation */}
                <div className="flex items-center gap-1.5">
                  <div className="h-5 w-5 bg-orange-50 rounded animate-pulse"></div>
                  <div className="h-5 bg-orange-50 rounded w-32 animate-pulse"></div>
                </div>
              </div>
              {/* Skeleton de la description */}
              <div className="flex flex-col gap-3">
                <div className="h-4 bg-orange-50 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-orange-50 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-orange-50 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-orange-50 rounded w-full animate-pulse mt-2"></div>
                <div className="h-4 bg-orange-50 rounded w-4/5 animate-pulse"></div>
              </div>
            </div>
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

  if (!data) {
    return null;
  }

  return (
    <section className="flex py-8 border-t-1 border-b-1 border-dashed border-gray-300 overflow-hidden">
      <div className="w-[95%] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-20">
        <Image
          src={data.photo}
          alt={data.photo_alt}
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
                  <span className="font-bold">{data.localisation}</span>
                </p>
              </div>
            </div>

            <ReactMarkdown>{data.description}</ReactMarkdown>
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
