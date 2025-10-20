import Hero from "../src/sections/Accueil/Hero/Hero";

export default function Home() {
  return (
    <div className="h-[9000px]">
      <Hero />
      <div className="absolute top-0 left-0 w-full h-25 bg-gradient-to-t from-orange-500/0 to-orange-500/60 pointer-events-none -z-10"></div>
    </div>
  );
}
