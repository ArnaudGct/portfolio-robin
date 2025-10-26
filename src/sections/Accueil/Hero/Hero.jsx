import CloudinaryPlayer from "./CloudinaryPlayer";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <CloudinaryPlayer />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        style={{
          backgroundImage: "url(/dot_grid.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 w-full h-25 bg-gradient-to-b from-white/0 to-white/100 pointer-events-none -z-10"></div>
    </section>
  );
}
