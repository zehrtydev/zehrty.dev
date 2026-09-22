import Image from "next/image";
import { DeveloperPortrait } from "./DeveloperPortrait";

const timeline = [
  {
    icon: "unad",
    title: "UNAD",
    text: "Ingeniería de Sistemas",
  },
  {
    icon: "campslands",
    title: "Programación e Inteligencia Artificial",
    text: "Formación simultánea",
  },
  {
    icon: "ingles",
    title: "Inglés en curso",
    text: "Español nativo · Inglés B+ en formación hacia C1",
  },
  {
    icon: "petrocasinos",
    title: "Experiencia profesional",
    text: "4 años en soporte L1 y L2",
  },
] as const;

const timelineLogos = {
  unad: { src: "/logos/unad.png", width: 3301, height: 2551 },
  campslands: { src: "/logos/campslands.svg", width: 103, height: 19 },
  ingles: { src: "/logos/ingles.webp", width: 122, height: 64 },
  petrocasinos: { src: "/logos/petrocasinos.png", width: 200, height: 200 },
} as const;

function TimelineIcon({ kind }: { kind: (typeof timeline)[number]["icon"] }) {
  return (
    <Image
      {...timelineLogos[kind]}
      className={`timeline-logo timeline-logo-${kind}`}
      alt=""
      sizes="(min-width: 1181px) 80px, 52px"
    />
  );
}

export function AboutSection() {
  return (
    <section className="about-section section-border" id="sobre-mi">
      <div className="about-grid shell">
        <div className="about-copy" data-reveal>
          <p className="eyebrow">SOBRE MÍ</p>
          <h2>
            Disciplina.
            <br />
            Aprendizaje.
            <br />
            Resultados.
          </h2>
          <p className="muted">
            Soy Zehrtydev, desarrollador y creador de soluciones digitales. Me
            mueve la idea de usar la tecnología para resolver problemas reales y
            generar un impacto positivo.
          </p>
          <a className="button button-outline" href="#contacto">
            Conoce más sobre mí
          </a>
        </div>

        <div className="developer-scene" data-reveal>
          <div className="screen" aria-hidden="true">
            <div className="screen-top">
              <span /><span /><span />
            </div>
            <div className="code-lines">
              {Array.from({ length: 24 }, (_, index) => <i key={index} />)}
            </div>
          </div>
          <DeveloperPortrait />
          <p className="hand-note about-note">
            Construir
            <br />
            también
            <br />
            es una forma
            <br />
            de avanzar.
          </p>
        </div>

        <div className="timeline" data-reveal>
          {timeline.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-icon">
                <TimelineIcon kind={item.icon} />
              </div>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
