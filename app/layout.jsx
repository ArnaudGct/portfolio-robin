"use client";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../src/sections/Header";
import Footer from "./../src/sections/Footer";
import ConstructionBanner from "../src/components/ConstructionBanner";
import Script from "next/script";
import { themeScript } from "./../lib/themeScript";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains-mono",
  weight: ["400", "500", "600", "700"], // choisis les poids que tu veux utiliser
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y5TS2CGPB5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y5TS2CGPB5');
          `}
        </Script>
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
        {/* <ConstructionBanner /> */}
      </body>
    </html>
  );
}
