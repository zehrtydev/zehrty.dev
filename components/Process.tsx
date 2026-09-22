import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiDatabase,
  FiFileText,
  FiLayers,
  FiRefreshCw,
  FiUserCheck,
  FiX,
} from "react-icons/fi";

const cards = [
  {
    title: "Fuentes de datos",
    icon: FiBox,
    items: ["APIs externas", "Archivos CSV/XLSX", "Entrada manual", "Eventos programados"],
  },
  {
    title: "Procesamiento",
    icon: FiLayers,
    items: ["Validación de reglas", "Enriquecimiento", "Detección de duplicados", "Preparación de datos"],
  },
  {
    title: "Revisión humana",
    icon: FiUserCheck,
    review: true,
  },
  {
    title: "Persistencia",
    icon: FiDatabase,
    items: ["Base de datos", "Historial de cambios", "Trazabilidad", "Listo para usar"],
  },
] as const;

export function ProcessSection() {
  return (
    <section className="process-section section-border">
      <div className="process-grid shell">
        <div className="process-copy" data-reveal>
          <p className="eyebrow">CÓMO FUNCIONA</p>
          <h2>
            Un sistema
            <br />
            pensado para el
            <br />
            control y la confianza.
          </h2>
          <p className="muted">
            Automatizo procesos, pero tú siempre tienes la última palabra. Cada
            dato pasa por una revisión antes de ser persistido.
          </p>
          <a className="text-link" href="#contacto">
            Conoce la arquitectura <FiArrowRight />
          </a>
        </div>

        <div className="pipeline-area" data-reveal>
          <div className="pipeline-row">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div className="pipeline-fragment" key={card.title}>
                  <article className={`pipeline-card ${"review" in card ? "review-card" : ""}`}>
                    <div className="pipeline-heading">
                      <Icon aria-hidden="true" />
                      <strong>{card.title}</strong>
                    </div>

                    {"review" in card ? (
                      <div className="review-content">
                        <FiUserCheck className="review-icon" />
                        <p>
                          Tú decides qué
                          <br />
                          se guarda.
                        </p>
                        <button type="button"><FiCheck /> Revisar</button>
                        <button type="button" className="secondary"><FiX /> Descartar</button>
                      </div>
                    ) : (
                      <div className="pipeline-items">
                        {card.items.map((item) => (
                          <span key={item}>
                            {index === 0 ? <FiFileText /> : index === 1 ? <FiRefreshCw /> : <FiDatabase />}
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                  {index < cards.length - 1 && (
                    <FiArrowRight
                      className="pipeline-arrow"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <p className="process-mantra">
            <span /> AUTOMATIZA CON INTELIGENCIA, DECIDE CON CONFIANZA. <span />
          </p>
        </div>
      </div>
      <div className="process-glow" aria-hidden="true" />
    </section>
  );
}
