"use client";
import { useState } from "react";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import Link from "next/link";
import { Instagram, LinkedIn } from "@/src/components/icons/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    object: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState({ isSubmitting: true, isSuccess: false, error: null });

    // Simulation d'envoi pour le développement
    console.log("📧 Données du formulaire:", formData);

    try {
      // Simuler un délai d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Succès
      setFormState({ isSubmitting: false, isSuccess: true, error: null });
      console.log("✅ Message envoyé avec succès!");

      // Réinitialiser le formulaire après 2 secondes
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          object: "",
          message: "",
        });
        setFormState({ isSubmitting: false, isSuccess: false, error: null });
      }, 2000);
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: error.message,
      });
      console.error("❌ Erreur:", error);
    }
  };

  return (
    <section id="contact" className="bg-[#282828]">
      <div className="relative w-[95%] max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-8 py-20">
        <div className="w-full lg:w-[50%] flex flex-col sm:flex-row lg:flex-col justify-between lg:justify-center gap-8">
          <div className="flex gap-4 items-center">
            <Image
              src="/photo_robin_main.webp"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-sm object-cover"
            />
            <div>
              <p className="font-clash-regular text-white text-2xl">
                Robin{" "}
                <span className="font-clash-bold text-orange-500">Augez</span>
              </p>
              <Link
                href="mailto:contact@cosmoseprod.com"
                className="underline text-white"
              >
                contact@cosmoseprod.com
              </Link>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col gap-5">
            <Link
              href="https://www.instagram.com/robin_agz/"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Instagram className="text-orange-500" />
              <p className="text-white">Instagram</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/robin-augez/"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <LinkedIn className="text-orange-500" />
              <p className="text-white">LinkedIn</p>
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[50%] rounded-none sm:rounded-lg"
        >
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-black text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                  disabled={formState.isSubmitting || formState.isSuccess}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-black text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                  disabled={formState.isSubmitting || formState.isSuccess}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 px-4 bg-black text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                disabled={formState.isSubmitting || formState.isSuccess}
              />
              <input
                type="text"
                name="object"
                placeholder="Objet"
                value={formData.object}
                onChange={handleChange}
                className="w-full py-2 px-4 bg-black text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                disabled={formState.isSubmitting || formState.isSuccess}
              />
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-2 px-4 bg-black text-white rounded-sm h-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                disabled={formState.isSubmitting || formState.isSuccess}
              />
            </div>

            <div className="flex flex-col gap-2 items-start justify-start">
              <ButtonMain
                type="submit"
                disabled={formState.isSubmitting || formState.isSuccess}
              >
                {formState.isSubmitting
                  ? "Envoi..."
                  : formState.isSuccess
                  ? "Envoyé"
                  : "Envoyer le message"}
              </ButtonMain>
              {formState.error && (
                <p className="text-red-500 text-sm">{formState.error}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
