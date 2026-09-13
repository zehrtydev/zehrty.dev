import type { Metadata } from "next";
import { inter, sora } from "../../site-fonts";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zehrty.dev"),
  title: "Zehrtydev — AI, automation, and real products",
  description:
    "Manuel Amado builds real products focused on artificial intelligence and automation while continuing to grow as an engineer.",
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    alternateLocale: ["es_CO"],
    url: "/en",
    siteName: "Zehrtydev",
    title: "Zehrtydev — AI, automation, and real products",
    description:
      "Real products built to solve concrete problems with artificial intelligence and automation.",
  },
};

export default function EnglishLayout({ children }: LayoutProps<"/en">) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
