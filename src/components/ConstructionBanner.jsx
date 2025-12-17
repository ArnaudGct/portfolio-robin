"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConstructionBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fermé la bannière
    const bannerClosed = localStorage.getItem("constructionBannerClosed");
    if (!bannerClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Sauvegarder le choix dans le localStorage
    localStorage.setItem("constructionBannerClosed", "true");
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-orange-500 text-white shadow-lg"
        >
          <div className="mx-auto px-4 py-3 relative">
            <div className="flex items-center justify-center">
              <p className="text-sm font-jet-brains-mono font-medium text-center">
                Site en construction
              </p>
            </div>
            <button
              onClick={handleClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 transition-colors duration-200 cursor-pointer"
              aria-label="Fermer la bannière"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
