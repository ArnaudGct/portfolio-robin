"use client";
import { useEffect, useState } from "react";

export default function SvgIcon({
  src,
  alt,
  className = "",
  color = "currentColor",
  width = 24,
  height = 24,
}) {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        const text = await response.text();

        // Remplacer les attributs de couleur dans le SVG
        let modifiedSvg = text
          .replace(/fill="[^"]*"/g, `fill="${color}"`)
          .replace(/stroke="[^"]*"/g, `stroke="${color}"`);

        // Ajouter fill aux éléments path, circle, rect, etc. qui n'en ont pas
        modifiedSvg = modifiedSvg.replace(
          /<(path|circle|rect|ellipse|polygon|polyline)(?![^>]*fill=)/g,
          `<$1 fill="${color}"`,
        );

        setSvgContent(modifiedSvg);
      } catch (error) {
        console.error("Erreur lors du chargement du SVG:", error);
      }
    };

    if (src) {
      fetchSvg();
    }
  }, [src, color]);

  return (
    <div
      className={className}
      style={{
        width,
        height,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      aria-label={alt}
    />
  );
}
