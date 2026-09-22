import { Reveal } from "@/components/Reveal";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechStrip } from "@/components/TechStrip";
import { TechStack } from "@/components/TechStack";
import { MoniSection } from "@/components/Moni";
import { ProcessSection } from "@/components/Process";
import { AboutSection } from "@/components/About";
import { ContactSection } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Reveal />
      <Header />
      <Hero />
      <TechStrip />
      <TechStack />
      <MoniSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
