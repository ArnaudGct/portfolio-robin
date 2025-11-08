"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ButtonMain from "./../components/ButtonMain";

export default function Header() {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClassText = (href) => {
    return isActive(href) ? "text-orange-500" : "text-black";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Initialiser l'état du scroll au montage du composant
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [isMenuOpen]);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop */}
      <div
        className="hidden lg:block w-full transition-all duration-300"
        style={{
          backgroundColor: isScrolled
            ? "var(--header-bg-scrolled)"
            : "var(--header-bg-transparent)",
          boxShadow: isScrolled
            ? "0px 4px 8px var(--header-shadow-color)"
            : "0px 0px 0px var(--header-shadow-color-transparent)",
          backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
        }}
      >
        <div className="flex justify-between items-center py-6 w-[98%] mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/photo_robin_main.webp"
              alt="Logo"
              width={35}
              height={35}
              className="rounded-sm"
            />
            <h1 className="font-clash-bold text-lg text-black">
              Cosmose<span className="text-orange-500">Prod.</span>
            </h1>
          </Link>
          <nav>
            <ul className="flex gap-8 font-jet-brains-mono font-normal text-sm">
              <li>
                <Link
                  href="/"
                  className={isActive("/") ? "text-orange-500" : "text-black"}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/apropos"
                  className={
                    isActive("/apropos") ? "text-orange-500" : "text-black"
                  }
                  aria-current={isActive("/apropos") ? "page" : undefined}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className={
                    isActive("/videos") ? "text-orange-500" : "text-black"
                  }
                  aria-current={isActive("/videos") ? "page" : undefined}
                >
                  Vidéos
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className={
                    isActive("/photos") ? "text-orange-500" : "text-black"
                  }
                  aria-current={isActive("/photos") ? "page" : undefined}
                >
                  Photos
                </Link>
              </li>
            </ul>
          </nav>
          <ButtonMain href="#contact">Contact</ButtonMain>
        </div>
      </div>

      {/* Version mobile */}
      <div className="lg:hidden relative w-full">
        <motion.div
          initial={{ height: "65px" }}
          animate={{
            height: isMenuOpen
              ? windowWidth <= 480 // Vérifie si le viewport est inférieur ou égal au breakpoint xs (640px)
                ? "320px" // Hauteur pour les petits écrans
                : "260px" // Hauteur pour les écrans plus larges
              : "65px",
          }}
          transition={{ type: "spring", bounce: 0.35 }}
          className="absolute top-0 right-0 w-full z-40"
          style={{
            backgroundColor:
              isMenuOpen || isScrolled
                ? "var(--header-bg-scrolled)"
                : "var(--header-bg-transparent)",
            boxShadow:
              isMenuOpen || isScrolled
                ? "0px 4px 8px var(--header-shadow-color)"
                : "0px 0px 0px var(--header-shadow-color-transparent)",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            WebkitBackdropFilter:
              isMenuOpen || isScrolled ? "blur(8px)" : "blur(0px)", // Safari support
            backdropFilter:
              isMenuOpen || isScrolled ? "blur(8px)" : "blur(0px)",
          }}
        />

        <div className="flex justify-between items-center mx-auto w-[95%] py-4 z-50 relative">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/photo_robin_main.webp"
              alt="Logo"
              width={35}
              height={35}
              className="rounded-sm"
            />
            <h1 className="font-clash-bold text-lg text-black">
              Cosmose<span className="text-orange-500">Prod.</span>
            </h1>
          </Link>
          <motion.button
            ref={menuButtonRef} // Ajout de la référence au bouton
            whileTap={{ scale: 0.85 }}
            onClick={toggleMenu}
            className="z-50 relative"
          >
            {isMenuOpen ? (
              <X className="text-orange-500" width={26} height={26} />
            ) : (
              <Menu className="text-orange-500" width={26} height={26} />
            )}
          </motion.button>
        </div>

        {/* Menu mobile (overlay) */}
        <AnimatePresence>
          {isMenuOpen ? (
            <div
              ref={menuRef}
              className="flex flex-col xs:flex-row items-center xs:items-end justify-between z-50 w-full px-8 py-1 gap-8 relative"
            >
              <motion.nav
                className="flex flex-col items-center xs:items-start justify-center gap-4 font-jet-brains-mono"
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.1 }}
              >
                <Link
                  href="/"
                  className={`${linkClassText("/")} font-normal`}
                  onClick={toggleMenu}
                >
                  Accueil
                </Link>
                <Link
                  href="/apropos"
                  className={`${linkClassText("/apropos")} font-normal`}
                  onClick={toggleMenu}
                >
                  À propos
                </Link>
                <Link
                  href="/videos"
                  className={`${linkClassText("/videos")} font-normal`}
                  onClick={toggleMenu}
                >
                  Vidéos
                </Link>
                <Link
                  href="/photos"
                  className={`${linkClassText("/photos")} font-normal`}
                  onClick={toggleMenu}
                >
                  Photos
                </Link>
              </motion.nav>
              <motion.div
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.1 }}
                className="w-full xs:w-auto"
              >
                <ButtonMain href="#contact">Contact</ButtonMain>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
