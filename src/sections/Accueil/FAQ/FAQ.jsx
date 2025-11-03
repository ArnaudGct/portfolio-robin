"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpenChange = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative flex overflow-hidden">
      <div className="relative w-[95%] max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-8 lg:gap-20">
        <div className="flex flex-col w-full lg:w-[50%] gap-2">
          <div className="flex w-fit">
            <p className="text-2xl text-black font-clash-bold">
              Les{" "}
              <span className="text-orange-500 tracking-normal">
                questions fréquentes.
              </span>
            </p>
          </div>
          <p className="text-gray-100">
            Voici les questions les plus fréquemment posées. <br />
            Si vous avez d'autres questions, n'hésitez pas à me contacter.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[50%]">
          <FAQItem
            title="Comment fonctionne votre processus de création ?"
            content="Je pense ouais"
            index={0}
            openIndex={openIndex}
            onOpenChange={handleOpenChange}
          />
          <FAQItem
            title="Quels sont vos délais de réalisation ?"
            content="Ça dépend du projet"
            index={1}
            openIndex={openIndex}
            onOpenChange={handleOpenChange}
          />
          <FAQItem
            title="Quels types de projets réalisez-vous ?"
            content="Tous types de projets vidéo"
            index={2}
            openIndex={openIndex}
            onOpenChange={handleOpenChange}
          />
        </div>
      </div>
    </section>
  );
}
