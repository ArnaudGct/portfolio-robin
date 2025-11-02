"use client";
import ButtonMain from "../../../components/ButtonMain";
import Image from "next/image";
import Tag from "../../../components/Tag";

export default function Videos() {
  return (
    <section className="bg-[#282828]">
      <div className="relative w-[95%] py-20 max-w-[1440px] mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-6 grid-rows-12 md:grid-rows-[repeat(6,minmax(100px,1fr))_auto] gap-2 md:gap-2">
          <div class="relative col-start-1 row-start-2 col-span-2 row-span-2 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative">
              <div className="absolute top-4 left-4 z-1">
                <div className="w-40 h-30">
                  <Image
                    src="/materiels/dji_ronin_4d.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-100px] left-[-50px] bg-green-50 rounded-full h-70 w-70 z-0"></div>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1">
              <Tag variant="green">Caméra</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">
                DJI Ronin 4D
              </p>
            </div>
          </div>
          <div class="col-start-1 row-start-9 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1  flex flex-col justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-semibold text-orange-500 text-2xl">
              Mise au point
            </p>
            <p className="font-clash-bold text-orange-500 text-5xl">Lidar</p>
          </div>
          <div class="col-start-1 row-start-1 col-span-2 md:col-start-3 md:row-start-2 md:col-span-2 md:row-span-3  flex justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-bold text-white text-3xl flex flex-col justify-center items-center">
              Mon<span className="text-orange-500">matériel.</span>
            </p>
          </div>
          <div class="relative col-start-1 row-start-10 md:col-start-3 md:row-start-5 md:col-span-2 md:row-span-1 flex justify-center items-center bg-[#171717] rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-6 h-full flex items-center z-1">
                <div className="w-12 h-12">
                  <Image
                    src="/materiels/premiere_pro.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-30px] left-[-50px] bg-orange-500 rounded-full h-40 w-40 z-0"></div>
            </div>
            <div className="absolute bottom-5 right-6 flex flex-col items-end gap-1">
              <p className="font-clash-bold text-orange-500 text-2xl">
                Premiere Pro
              </p>
              <Tag variant="default">Logiciel de montage</Tag>
            </div>
          </div>
          <div class="col-start-1 row-start-11 col-span-2 row-span-2 md:col-start-1 md:row-start-7 md:col-span-6 md:row-span-1 flex justify-between items-center bg-[#171717] rounded-sm h-fit">
            <p className="font-clash-semibold text-orange-500 text-xl px-4">
              Et bien + d'accessoires pour rendre vos rendus comme vous
              l'imaginez
            </p>
            <ButtonMain href="/materiel" className="w-fit">
              Voir la liste complète
            </ButtonMain>
          </div>
          <div class="col-start-1 row-start-4 col-span-2 md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1 flex justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-bold text-orange-500 text-2xl">
              Jusqu'à 6K
            </p>
          </div>
          <div class="relative col-start-1 row-start-5 row-span-2 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-1">
                <div className="w-40 h-30">
                  <Image
                    src="/materiels/s5IIx.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-70px] left-1/2 -translate-x-1/2 bg-green-50 rounded-full h-70 w-70 z-0"></div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 w-full">
              <Tag variant="green">Caméra</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">S5IIX</p>
            </div>
          </div>
          <div class="relative col-start-2 row-start-5 row-span-2 md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-1">
                <div className="w-40 h-30">
                  <Image
                    src="/materiels/gh5.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-70px] left-1/2 -translate-x-1/2 bg-green-50 rounded-full h-70 w-70 z-0"></div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 w-full">
              <Tag variant="green">Caméra</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">GH5</p>
            </div>
          </div>
          <div class="relative col-start-1 row-start-7 col-span-2 md:col-start-5 md:row-start-1 md:col-span-1 md:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-1">
                <div className="w-40 h-30">
                  <Image
                    src="/materiels/dji_air_3s.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-70px] left-1/2 -translate-x-1/2 bg-green-50 rounded-full h-70 w-70 z-0"></div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 w-full">
              <Tag variant="green">Drone</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">
                DJI Air 3S
              </p>
            </div>
          </div>
          <div class="relative col-start-1 row-start-8 col-span-2 md:col-start-6 md:row-start-1 md:col-span-1 md:row-span-3 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-1">
                <div className="w-30 h-30">
                  <Image
                    src="/materiels/osmo_action_5_pro.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-70px] left-1/2 -translate-x-1/2 bg-green-50 rounded-full h-70 w-70 z-0"></div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 w-full">
              <Tag variant="green">Caméra d'action</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">
                Action 5 Pro
              </p>
            </div>
          </div>
          <div class="col-start-2 row-start-9 md:col-start-5 md:row-start-4 md:col-span-2 md:row-span-1 flex justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-bold text-orange-500 text-2xl">
              Stabilisation inégalable
            </p>
          </div>
          <div class="relative col-start-2 row-start-10 md:col-start-5 md:row-start-5 md:col-span-2 md:row-span-2 bg-green-100 rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative h-full">
              <div className="absolute top-1/2 -translate-y-2/5 left-[-10px] z-1">
                <div className="w-50 h-70">
                  <Image
                    src="/materiels/rs_3.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[-80px] bg-green-50 rounded-full h-70 w-70 z-0"></div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-6 flex flex-col items-center gap-1">
              <Tag variant="green">Stabilisateur</Tag>
              <p className="font-clash-bold text-green-50 text-2xl">DJI RS3</p>
            </div>
          </div>
          <div class="hidden md:flex md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1 flex-col justify-center items-center bg-[#171717] rounded-sm min-h-[100px]">
            <p className="font-clash-semibold text-orange-500 text-2xl">
              Couleurs
            </p>
            <p className="font-clash-bold text-orange-500 text-5xl">10 Bits</p>
          </div>
          <div class="relative hidden md:flex md:col-start-3 md:row-start-6 md:col-span-2 md:row-span-1 justify-center items-center bg-[#171717] rounded-sm overflow-hidden min-h-[100px]">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-6 h-full flex items-center z-1">
                <div className="w-12 h-12">
                  <Image
                    src="/materiels/resolve.webp"
                    alt="DJI Ronin 4D"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-[-30px] left-[-50px] bg-orange-500 rounded-full h-40 w-40 z-0"></div>
            </div>
            <div className="absolute bottom-5 right-6 flex flex-col items-end gap-1">
              <p className="font-clash-bold text-orange-500 text-2xl">
                Resolve Studio
              </p>
              <Tag variant="default">Logiciel de montage</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
