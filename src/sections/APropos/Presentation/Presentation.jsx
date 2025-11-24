"use client";
import { useEffect, useState } from "react";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import { Pin } from "./../../../components/icons/Icons";
import Tag from "@/src/components/Tag";
import ReactMarkdown from "react-markdown";

export default function Presentation() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch("/api/apropos/general");
        if (!res.ok) {
          console.error("Erreur fetching apropos_general:", res.status);
          return;
        }
        const json = await res.json();
        if (!mounted) return;
        setData(json);
      } catch (err) {
        console.error(
          "Erreur lors de la récupération de apropos_general:",
          err
        );
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    // whenever the photo source changes, show the loader until it's loaded
    setImageLoading(true);
  }, [data?.photo]);

  if (loading) {
    return (
      <section className="relative flex py-8 border-t-1 border-b-1 border-dashed border-gray-300 overflow-hidden">
        <div className="w-[95%] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-20">
          {/* Skeleton de l'image */}
          <div className="h-[500px] md:h-[500px] w-full md:w-[60%] bg-orange-50 rounded-sm animate-pulse"></div>

          {/* Skeleton du contenu */}
          <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                {/* Skeleton du titre */}
                <div className="h-10 bg-orange-50 rounded w-3/4 animate-pulse"></div>
                {/* Skeleton des tags */}
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="h-6 bg-orange-50 rounded w-24 animate-pulse"></div>
                  <div className="h-6 bg-orange-50 rounded w-20 animate-pulse"></div>
                  <div className="h-6 bg-orange-50 rounded w-28 animate-pulse"></div>
                </div>
              </div>
              {/* Skeleton de la description */}
              <div className="flex flex-col gap-3">
                <div className="h-4 bg-orange-50 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-orange-50 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-orange-50 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-orange-50 rounded w-full animate-pulse mt-3"></div>
                <div className="h-4 bg-orange-50 rounded w-4/5 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex py-8 border-t-1 border-b-1 border-dashed border-gray-300 overflow-hidden">
      <div className="w-[95%] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="relative flex items-stretch h-[500px] md:h-[500px] w-full md:w-[60%]">
          {/* Skeleton pendant le chargement de l'image */}
          {(imageLoading || !data?.photo) && (
            <div className="absolute inset-0 bg-orange-50 rounded-sm animate-pulse z-10 transition-opacity duration-300"></div>
          )}

          {data?.photo && (
            <Image
              src={data.photo}
              alt={data?.photo_alt || "Photo de Robin"}
              fill
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              className={`object-cover rounded-sm object-right transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
          )}
        </div>
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

            <ReactMarkdown>
              {data?.description ||
                `Magna dolor laboris labore elit ullamco ad ut sit et reprehenderit minim minim quis fugiat anim. Occaecat dolore cillum excepteur Lorem aliqua commodo culpa nisi sint exercitation.

Excepteur est exercitation do id velit dolore dolor amet. Consectetur pariatur proident non mollit ut Lorem aute et nostrud sint. Cillum commodo ipsum excepteur labore esse enim Lorem nisi excepteur anim in do anim labore dolor.`}
            </ReactMarkdown>
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
