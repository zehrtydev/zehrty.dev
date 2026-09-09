import { Inter, Sora } from "next/font/google";

export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
