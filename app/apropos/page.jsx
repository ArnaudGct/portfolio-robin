import Presentation from "../../src/sections/APropos/Presentation/Presentation";
import Bento from "../../src/sections/APropos/Bento/Bento";

export default function APropos() {
  return (
    <main className="flex flex-col w-full gap-12 md:gap-18 mb-20">
      <Presentation />
      <Bento />
      <div className="absolute top-0 left-0 w-full h-25 bg-gradient-to-t from-orange-500/0 to-orange-500/60 pointer-events-none -z-10"></div>
    </main>
  );
}
