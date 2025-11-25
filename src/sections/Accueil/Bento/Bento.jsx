"use client";
import ButtonMain from "../../../components/ButtonMain";
import Image from "next/image";
import Tag from "../../../components/Tag";
import { ExternalLinkIcon } from "../../../components/icons/Icons";

export default function Videos() {
  return (
    <section className="bg-[#282828]">
      <div className="relative w-[95%] py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 grid-rows-12 sm:grid-rows-[repeat(10,minmax(100px,1fr))_auto] lg:grid-rows-[repeat(9,minmax(100px,1fr))_auto] xl:grid-rows-[repeat(6,minmax(100px,1fr))_auto] gap-2 xl:gap-2">
          <div className="relative col-start-1 row-start-2 col-span-2 row-span-2 xl:col-start-1 xl:row-start-1 xl:col-span-2 xl:row-span-2 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative h-full w-full">
              <div className="absolute top-4 sm:top-1/2 sm:-translate-y-1/2 left-4 sm:left-10 lg:left-6 xl:translate-y-0 xl:top-4 xl:left-4 z-1">
                <div className="w-38 h-28 sm:w-46 sm:h-38 xl:w-45 xl:h-32">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088540/dji_ronin_4d_wnr9t1.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-125px] left-[-65px] sm:top-[-80px] sm:left-[-50px] lg:top-[-60px] lg:left-[-50px] xl:top-[-130px] xl:left-[-70px] bg-green-50 rounded-full h-75 w-75 sm:h-90 sm:w-90 lg:h-80 lg:w-80 z-0"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-1/2 sm:translate-y-1/2 right-6 xl:translate-y-0 xl:bottom-4 xl:right-4 flex flex-col items-end gap-1">
              <Tag variant="green">Caméra</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">
                DJI Ronin 4D
              </p>
            </div>
          </div>
          <div className="row-start-10 col-span-1 col-start-1 row-span-1 lg:row-start-8 lg:col-span-2 lg:col-start-3 lg:row-span-1 xl:col-start-3 xl:row-start-1 xl:col-span-1 xl:row-span-1 flex flex-col justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-semibold text-orange-500 text-2xl">
              Mise au point
            </p>
            <p className="font-clash-bold text-orange-500 text-5xl">Lidar</p>
          </div>
          <div className="col-start-1 row-start-1 col-span-2 lg:row-start-1 lg:col-start-1 lg:row-span-1 lg:col-span-4 xl:col-start-3 xl:row-start-2 xl:col-span-2 xl:row-span-4  flex justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-bold text-white text-3xl flex flex-col justify-center items-center">
              Mon<span className="text-orange-500">matériel.</span>
            </p>
          </div>
          <div className="col-start-1 row-start-4 col-span-2 xl:col-start-1 xl:row-start-3 xl:col-span-2 xl:row-span-1 flex justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-bold text-orange-500 text-2xl">
              Jusqu'à 6K
            </p>
          </div>
          <div className="relative col-start-1 row-start-5 row-span-1 col-span-2 sm:col-span-1 sm:row-span-2 sm:row-start-5 sm:col-start-1 lg:row-start-5 lg:col-start-1 lg:row-span-3 lg:col-span-1 xl:col-start-1 xl:row-start-4 xl:col-span-1 xl:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative h-full w-full">
              <div className="absolute top-1/2 -translate-y-1/2 left-10 sm:left-auto sm:right-6 lg:top-4 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 z-1">
                <div className="w-24 h-40 sm:w-26 sm:h-40 md:w-34 md:h-40 lg:w-40 lg:h-30">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088541/s5IIx_qd4c2z.webp"
                    alt="Photo de S5IIX"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[-80px] sm:left-auto sm:right-[-110px] md:right-[-60px] lg:translate-y-0 lg:top-[-125px] xl:top-[-80px]  lg:left-1/2 lg:-translate-x-1/2 bg-green-50 rounded-full h-70 w-70 lg:h-80 lg:w-80 xl:h-70 xl:w-70 z-0"></div>
            </div>
            <div className="absolute bottom-1/2 translate-y-1/2 w-fit right-10 sm:right-auto sm:left-6 lg:translate-y-0 lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-1 lg:w-full">
              <Tag variant="green">Caméra</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">S5IIX</p>
            </div>
          </div>
          <div className="relative col-start-1 row-start-6 row-span-1 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-5 sm:row-span-2 lg:row-start-5 lg:col-start-2 lg:row-span-3 lg:col-span-1 xl:col-start-2 xl:row-start-4 xl:col-span-1 xl:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative h-full w-full">
              <div className="absolute top-1/2 -translate-y-1/2 left-10 sm:left-6 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 z-1">
                <div className="w-26 h-40 sm:w-28 sm:h-40 md:w-35 md:h-40 lg:w-40 lg:h-30">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088540/gh5_pbi31t.webp"
                    alt="Photo de GH5"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 left-[-80px] sm:left-[-110px] md:left-[-70px] lg:top-[-125px] xl:top-[-80px]  lg:left-1/2 lg:-translate-x-1/2 bg-green-50 rounded-full h-70 w-70 lg:h-80 lg:w-80 xl:h-70 xl:w-70 z-0"></div>
            </div>
            <div className="absolute bottom-1/2 translate-y-1/2 w-fit right-10 sm:right-6 lg:bottom-6 lg:translate-y-0 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-1 lg:w-full">
              <Tag variant="green">Caméra</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">GH5</p>
            </div>
          </div>
          <div className="relative col-start-1 row-start-7 col-span-2 sm:col-start-1 sm:row-start-7 sm:col-span-1 lg:row-start-2 lg:col-start-3 lg:col-span-1 lg:row-span-3 xl:col-start-5 xl:row-start-1 xl:col-span-1 xl:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative h-full w-full">
              <div className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-2 md:right-6 lg:top-4 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 z-1">
                <div className="w-26 h-40 lg:w-40 lg:h-30">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088539/dji_air_3s_iw2ne4.webp"
                    alt="Photo de DJI Air 3s"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-90px] sm:right-[-150px] md:right-[-120px] lg:translate-y-0 lg:top-[-125px] xl:top-[-80px]  lg:left-1/2 lg:-translate-x-1/2 bg-green-50 rounded-full h-70 w-70 lg:h-80 lg:w-80 xl:h-70 xl:w-70 z-0"></div>
            </div>
            <div className="absolute bottom-1/2 translate-y-1/2 w-fit left-6 sm:left-6 lg:translate-y-0 lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-start lg:items-center gap-1 lg:w-full">
              <Tag variant="green">Drone</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">
                DJI Air 3S
              </p>
            </div>
          </div>
          <div className="relative col-start-1 row-start-8 col-span-2 sm:col-start-2 sm:row-start-7 sm:col-span-1 lg:row-start-2 lg:col-start-4 lg:row-span-3 lg:col-span-1 xl:col-start-6 xl:row-start-1 xl:col-span-1 xl:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative h-full w-full">
              <div className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-auto sm:left-4 md:left-6 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 z-1">
                <div className="w-18 h-24 lg:w-40 lg:h-30">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088540/osmo_action_5_pro_ft8pxj.webp"
                    alt="Pohoto de Osmo Action 5 Pro"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-[-125px] xl:top-[-80px] right-[-130px] sm:right-auto sm:left-[-170px] md:left-[-140px] lg:left-1/2 lg:-translate-x-1/2 bg-green-50 rounded-full h-70 w-70 lg:h-80 lg:w-80 xl:h-70 xl:w-70 z-0"></div>
            </div>
            <div className="absolute bottom-1/2 translate-y-1/2 w-fit left-6 sm:left-auto sm:right-6 lg:bottom-6 lg:translate-y-0 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-1 lg:w-full">
              <Tag variant="green">Caméra d'action</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">
                Action 5 Pro
              </p>
            </div>
          </div>
          <div className="col-start-1 row-start-9 col-span-2 row-span-1 sm:col-start-2 sm:row-start-8 sm:col-span-1 sm:row-span-2 lg:row-start-5 lg:col-start-3 lg:row-span-1 lg:col-span-2 xl:col-start-5 xl:row-start-4 xl:col-span-2 xl:row-span-1 flex justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-bold text-orange-500 text-2xl">
              Stabilisation inégalable
            </p>
          </div>
          <div className="relative col-start-1 col-span-2 row-start-10 sm:col-start-1 sm:row-start-8 sm:col-span-1 sm:row-span-2 lg:row-start-6 lg:col-start-3 lg:row-span-2 lg:col-span-2 xl:col-start-5 xl:row-start-5 xl:col-span-2 xl:row-span-2 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative h-full">
              <div className="absolute top-1/2 -translate-y-2/7 sm:-translate-y-2/5 left-2 sm:left-[-10px] md:left-3 lg:left-6 z-1">
                <div className="w-30 h-30 md:w-30 md:h-40 lg:w-30 lg:h-50">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088541/rs_3_xmxzsn.webp"
                    alt="Photo de RS3"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[-120px] sm:left-[-160px] md:left-[-100px] lg:left-[-80px] bg-green-50 rounded-full h-70 w-70 z-0"></div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-6 flex flex-col items-center gap-1">
              <Tag variant="green">Stabilisateur</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">DJI RS3</p>
            </div>
          </div>
          <div className="row-start-10 col-span-1 col-start-2 row-span-1 lg:row-start-8 lg:col-span-2 lg:col-start-1 lg:row-span-1 xl:col-start-4 xl:row-start-1 xl:col-span-1 xl:row-span-1 flex flex-col justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-semibold text-orange-500 text-2xl">
              Couleurs
            </p>
            <p className="font-clash-bold text-orange-500 text-5xl">10 Bits</p>
          </div>
          <div className="relative col-start-1 row-start-11 col-span-2 sm:col-start-1 sm:row-start-11 sm:col-span-1 sm:row-span-1 lg:row-start-9 lg:col-span-2 lg:col-start-1 lg:row-span-1 xl:col-start-3 xl:row-start-6 xl:col-span-1 xl:row-span-1 flex justify-center items-center bg-[#171717] rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-5 md:right-6 lg:right-auto lg:left-6 xl:left-1/2 xl:-translate-x-1/2 h-full flex items-center z-1">
                <div className="h-12 w-12 sm:w-10 sm:h-10 md:w-13 md:h-13">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088461/premiere_pro_maelag.webp"
                    alt="Logo de Premiere Pro"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] sm:right-[-80px] md:right-[-60px] lg:right-auto lg:left-[-50px] xl:left-1/2 xl:-translate-x-1/2 bg-orange-500 rounded-full h-40 w-40 xl:w-35 xl:h-35 z-0"></div>
            </div>
            <div className="flex xl:hidden absolute bottom-1/2 translate-y-1/2 left-6 lg:left-auto lg:right-6 flex-col items-start lg:items-end gap-1">
              <p className="font-clash-bold text-orange-500 text-2xl">
                Premiere Pro
              </p>
              <Tag variant="default">Logiciel de montage</Tag>
            </div>
          </div>
          <div className="relative flex col-start-1 row-start-12 col-span-2 sm:col-start-2 sm:row-start-11 sm:col-span-1 sm:row-span-1 lg:row-start-9 lg:col-span-2 lg:col-start-3 lg:row-span-1 lg:flex xl:col-start-4 xl:row-start-6 xl:col-span-1 xl:row-span-1 justify-center items-center bg-[#171717] rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-auto sm:left-5 md:left-6 xl:left-1/2 xl:-translate-x-1/2 h-full flex items-center z-1">
                <div className="h-15 w-15 sm:h-12 sm:w-12 md:w-15 md:h-15">
                  <Image
                    src="https://res.cloudinary.com/ddit7absq/image/upload/v1764088463/resolve_biemuq.webp"
                    alt="Logo de Resolve Studio"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] sm:right-auto sm:left-[-80px] md:left-[-50px] xl:left-1/2 xl:-translate-x-1/2 bg-orange-500 rounded-full h-40 w-40 xl:h-35 xl:w-35 z-0"></div>
            </div>
            <div className="flex xl:hidden absolute bottom-1/2 translate-y-1/2 left-6 sm:left-auto sm:right-6 flex-col items-end gap-1">
              <p className="font-clash-bold text-orange-500 text-2xl">
                Resolve Studio
              </p>
              <Tag variant="default">Logiciel de montage</Tag>
            </div>
          </div>
          <div className="col-start-1 row-start-13 col-span-2 row-span-2 sm:col-start-1 sm:row-start-12 sm:col-span-2 sm:row-span-2 lg:row-start-10 lg:col-span-4 lg:col-start-1 lg:row-span-1 xl:col-start-1 xl:row-start-7 xl:col-span-6 xl:row-span-1 flex flex-col sm:flex-row justify-between items-center bg-[#171717] rounded-sm p-4 gap-4">
            <p className="font-clash-semibold text-orange-500 text-xl">
              Et bien + d'accessoires pour rendre vos rendus comme vous
              l'imaginez
            </p>
            {/* <ButtonMain
              href="/materiel"
              className="w-full sm:w-auto whitespace-nowrap shrink-0"
              icon={<ExternalLinkIcon className="text-[#171717]" />}
            >
              Voir la liste complète
            </ButtonMain> */}
          </div>
        </div>
      </div>
    </section>
  );
}
