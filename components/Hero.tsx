import { FiArrowRight } from "react-icons/fi";

export function Hero() {
  return (
    <>
      <section className="hero shell" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">DESARROLLO · AUTOMATIZACIÓN · RESULTADOS</p>
          <h1 id="hero-title">
            Más que automatizar:
            <span>construir productos útiles.</span>
          </h1>
          <p className="hero-description">
            Transformo ideas en software real. Construyo productos,
            automatizaciones y herramientas digitales enfocadas en resolver
            problemas concretos.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:soporte@zehrty.dev">
              Conversemos <FiArrowRight aria-hidden="true" />
            </a>
            <a className="button button-outline" href="#productos">
              Ver proyectos
            </a>
          </div>
        </div>

        <div className="orb-stage" aria-hidden="true">
          <div className="orb-glow" />
          <div className="orb" />
          <div className="orb-rim" />
        </div>

        <aside className="hero-rail" aria-label="Principios de Zehrtydev">
          <div className="rail-words">
            <span>IDEAS</span>
            <span>CÓDIGO</span>
            <span>PRODUCTOS</span>
            <span>PERSONAS</span>
          </div>
          <span className="rail-rule" />
          <p>
            UN SOFTWARE
            <br />
            MÁS HUMANO
            <br />
            ES POSIBLE.
          </p>
        </aside>
      </section>
    </>
  );
}
