import { FiBookOpen, FiBriefcase, FiCode } from "react-icons/fi";
import { DeveloperPortrait } from "./DeveloperPortrait";

const timeline = [
  {
    icon: "unad",
    title: "UNAD",
    text: "Ingeniería de Sistemas",
  },
  {
    icon: "code",
    title: "Programación e Inteligencia Artificial",
    text: "Formación simultánea",
  },
  {
    icon: "book",
    title: "Inglés en curso",
    text: "Español nativo · Inglés B+ en formación hacia C1",
  },
  {
    icon: "work",
    title: "Experiencia profesional",
    text: "4 años en soporte L1 y L2",
  },
] as const;

function TimelineIcon({ kind }: { kind: string }) {
  if (kind === "unad") return <span className="unad-mark">UNAD</span>;
  if (kind === "code") return <FiCode />;
  if (kind === "book") return <FiBookOpen />;
  return <FiBriefcase />;
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
