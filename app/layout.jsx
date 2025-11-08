"use client";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../src/sections/Header";
import Footer from "./../src/sections/Footer";
import ConstructionBanner from "../src/components/ConstructionBanner";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { themeScript } from "./../lib/themeScript";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains-mono",
  weight: ["400", "500", "600", "700"], // choisis les poids que tu veux utiliser
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Vérifie si l'URL contient /creations/album/[id_alb]
  const isAlbumPage = pathname.match(/^\/creations\/album\/\d+/);
  const isVideoPage = pathname.match(/^\/creations\/video\/\d+/);
  const isAutrePage = pathname.match(/^\/creations\/autre\/\d+/);

  // Exclure la page dynamique de l'affichage du Header
  const noHeaderRoutes = ["/journal-personnel"];
  const showHeader =
    !noHeaderRoutes.includes(pathname) &&
    !isAlbumPage &&
    !isVideoPage &&
    !isAutrePage;

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <title>CosmoseProd</title>
        <meta
          name="description"
          content="Explorez le portfolio de Arnaud Graciet, monteur vidéo en freelance."
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${jetBrainsMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        {showHeader && <Header />}
        <div
          className={`flex-grow ${showHeader ? "pt-[67px] lg:pt-[84px]" : ""}`}
        >
          {children}
        </div>
        <Footer />
        <ConstructionBanner />
      </body>
    </html>
  );
}
