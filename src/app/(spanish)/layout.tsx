import type { Metadata } from "next";
import { inter, sora } from "../site-fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zehrty.dev"),
  title: "Zehrtydev — IA, automatización y productos reales",
  description:
    "Manuel Amado construye productos reales enfocados en inteligencia artificial y automatización mientras continúa creciendo como ingeniero.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en"],
    url: "/",
    siteName: "Zehrtydev",
    title: "Zehrtydev — IA, automatización y productos reales",
    description:
      "Productos reales para resolver problemas concretos con inteligencia artificial y automatización.",
  },
};

export default function SpanishLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
