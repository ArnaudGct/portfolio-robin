"use client";
import { useState, useEffect } from "react";
import ButtonMain from "@/src/components/ButtonMain";
import Image from "next/image";
import Link from "next/link";
import { Instagram, LinkedIn, Pin, Mail } from "@/src/components/icons/Icons";

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
    isError: false,
    message: "",
  });

  useEffect(() => {
    if (formState.isSuccess) {
      const timer = setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isSuccess: false,
          message: "",
        }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formState.isSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "Message envoyé avec succès !",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          object: "",
          message: "",
        });
      } else {
        throw new Error(result.error?.message || "Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error.message || "Une erreur est survenue.",
      });
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
              width={70}
              height={70}
              className="rounded-sm object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="font-clash-regular text-white text-2xl">
                Robin{" "}
                <span className="font-clash-bold text-orange-500">Augez</span>
              </p>
              <div>
                <div className="flex items-center gap-1.5">
                  <Pin className="text-white" />
                  <p className="text-white">
                    <span className="font-bold">Bordeaux</span> (+ déplacement
                    dans toute la France)
                  </p>
                </div>
                <Link
                  href="mailto:robin@cosmoseprod.com"
                  className="underline text-white flex items-center gap-1.5"
                >
                  <Mail className="text-white" />
                  <p>robin@cosmoseprod.com</p>
                </Link>
              </div>
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
                  ? "Envoi en cours..."
                  : formState.isSuccess
                  ? "Message envoyé !"
                  : "Envoyer le message"}
              </ButtonMain>
              {formState.isError && (
                <p className="text-red-500 text-sm">{formState.message}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
