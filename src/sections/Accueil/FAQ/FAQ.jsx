"use client";
import { useState, useEffect } from "react";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const handleOpenChange = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    let mounted = true;

    const fetchFaqs = async () => {
      try {
        const res = await fetch("/api/accueil/faq");
        if (!res.ok) {
          console.error("Erreur fetching FAQs:", res.status);
          return;
        }
        const data = await res.json();
        if (!mounted || !Array.isArray(data)) return;
        setFaqs(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des FAQs:", err);
      }
    };

    fetchFaqs();

    return () => {
      mounted = false;
    };
  }, []);

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
          {faqs.map((f, idx) => (
            <FAQItem
              key={f.id_faq}
              title={f.titre}
              content={f.contenu}
              index={idx}
              openIndex={openIndex}
              onOpenChange={handleOpenChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
