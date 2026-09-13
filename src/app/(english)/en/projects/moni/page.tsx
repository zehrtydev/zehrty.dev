import type { Metadata } from "next";
import { MoniCaseStudy } from "@/components/moni-case-study";
import { moniEn } from "@/content/moni";

const title = "Moni — Technical case study | Zehrtydev";
const description =
  "The technical story behind Moni: product decisions, deterministic parsing, AI fallback, human confirmation, and the path to production.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/projects/moni",
    languages: {
      es: "/projects/moni",
      en: "/en/projects/moni",
      "x-default": "/projects/moni",
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    alternateLocale: ["es_CO"],
    url: "/en/projects/moni",
    siteName: "Zehrtydev",
    title,
    description,
  },
};

export default function EnglishMoniCaseStudy() {
  return <MoniCaseStudy content={moniEn} />;
}
