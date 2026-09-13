import type { Metadata } from "next";
import { MoniCaseStudy } from "@/components/moni-case-study";
import { moniEs } from "@/content/moni";

const title = "Moni — Caso técnico | Zehrtydev";
const description =
  "La historia técnica de Moni: decisiones de producto, parsing determinista, fallback con IA, confirmación humana y evolución hasta producción.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects/moni",
    languages: {
      es: "/projects/moni",
      en: "/en/projects/moni",
      "x-default": "/projects/moni",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en"],
    url: "/projects/moni",
    siteName: "Zehrtydev",
    title,
    description,
  },
};

export default function SpanishMoniCaseStudy() {
  return <MoniCaseStudy content={moniEs} />;
}
