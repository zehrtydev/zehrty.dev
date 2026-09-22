import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zehrtydev - Manuel Amado | Desarrollo y Automatización",
  description:
    "Manuel Amado, Zehrtydev. Desarrollo de productos digitales, automatización y software útil para problemas reales.",
  metadataBase: new URL("https://zehrty.dev"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Zehrtydev - Manuel Amado",
    description:
      "Productos digitales, automatización y software útil construido por Manuel Amado.",
    url: "https://zehrty.dev",
    siteName: "Zehrtydev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
