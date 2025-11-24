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
        <div className="w-[95%] max-w-[1440px] mx-auto flex justify-center items-center h-64">
          <p>Chargement...</p>
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
