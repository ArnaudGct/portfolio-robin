"use client";
import LogicielsOutils from "./LogicielsOutils/LogicielsOutils";
import ReseauxSociaux from "./ReseauxSociaux/ReseauxSociaux";
import Experiences from "./Experiences/Experiences";
import Etudes from "./Etudes/Etudes";

export default function Bento() {
  return (
    <section className="w-[95%] max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-12">
      <div className="flex flex-col justify-start md:flex-row md:justify-between lg:flex-col lg:justify-start gap-12 w-full">
        <LogicielsOutils />
        <ReseauxSociaux />
      </div>
      <div className="w-full">
        <Experiences />
      </div>
      <div className="w-full">
        <Etudes />
      </div>
    </section>
  );
}
