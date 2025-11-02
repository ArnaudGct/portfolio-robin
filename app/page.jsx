import Hero from "../src/sections/Accueil/Hero/Hero";
import Carousel from "../src/sections/Accueil/Carousel/Carousel";
import Clients from "../src/sections/Accueil/Clients/Clients";
import Presentation from "../src/sections/Accueil/Presentation/Presentation";
import Videos from "../src/sections/Accueil/Videos/Videos";
import Bento from "../src/sections/Accueil/Bento/Bento";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-12 md:gap-18 h-[9000px]">
      <Hero />
      <div className="flex flex-col w-full gap-18 md:gap-20 mb-28">
        <div className="hidden sm:block">
          <Carousel />
        </div>
        <Clients />
        <div>
          <Presentation />
          <Videos />
          <Bento />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-25 bg-gradient-to-t from-orange-500/0 to-orange-500/60 pointer-events-none -z-10"></div>
    </main>
  );
}
