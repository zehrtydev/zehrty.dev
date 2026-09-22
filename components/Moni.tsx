import {
  FiArrowRight,
  FiBarChart2,
  FiClock,
  FiMessageCircle,
  FiPenTool,
  FiTarget,
  FiSearch,
  FiHome,
  FiActivity,
  FiFlag,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

const features = [
  [FiMessageCircle, "Registro de gastos por WhatsApp"],
  [FiClock, "Seguimiento en tiempo real"],
  [FiBarChart2, "Reportes visuales"],
  [FiPenTool, "Diseño minimalista"],
  [FiTarget, "Pensada para la vida real"],
] as const;

function MiniDashboard() {
  return (
    <div className="moni-dashboard" aria-label="Mockup simulado del dashboard de Moni">
      <aside className="moni-sidebar">
        <div className="moni-logo">
          <span className="mini-mark">Z</span>
          <strong>Moni</strong>
        </div>
        <nav aria-label="Vista simulada del menú de Moni">
          <span className="selected"><FiHome />Inicio</span>
          <span><FiActivity />Transacciones</span>
          <span><FiFlag />Metas</span>
          <span><FiFileText />Reportes</span>
          <span><FiSettings />Configuración</span>
        </nav>
      </aside>

      <div className="moni-main">
        <div className="moni-topbar">
          <div>
            <h4>Hola, de vuelta 👋</h4>
            <p>Aquí está el resumen de tu actividad.</p>
          </div>
          <div className="moni-search"><FiSearch /> Buscar...</div>
          <div className="avatar-dot">M</div>
        </div>

        <div className="moni-kpis">
          <article>
            <small>Ingresos</small>
            <strong>$ 4.230.000</strong>
            <span className="positive">↑ 12%</span>
          </article>
          <article>
            <small>Gastos</small>
            <strong>$ 1.560.000</strong>
            <span className="negative">↓ 8%</span>
          </article>
          <article>
            <small>Ahorro</small>
            <strong>$ 2.670.000</strong>
            <span className="positive">↑ 20%</span>
          </article>
        </div>

        <div className="moni-bottom">
          <article className="activity-card">
            <div className="dash-card-title">
              <span>Actividad reciente</span>
              <small>$230.000 · May 02, 2026</small>
            </div>
            <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true">
              <path className="chart-grid" d="M0 35H520M0 80H520M0 125H520" />
              <path
                className="chart-path"
                d="M0,135 C45,120 70,105 105,115 S165,150 210,105 S275,95 318,82 S370,110 410,70 S470,62 520,35"
              />
              <circle cx="520" cy="35" r="5" className="chart-dot" />
            </svg>
            <div className="chart-labels">
              <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </article>

          <article className="goal-card">
            <span>Metas</span>
            <div className="goal-ring">
              <div><strong>68%</strong></div>
            </div>
            <strong>Viaje a Japón</strong>
            <small>$2.000.000 / $3.000.000</small>
          </article>
        </div>
      </div>
    </div>
  );
}

export function MoniSection() {
  return (
    <section className="product-section shell" id="productos">
      <div className="product-copy" data-reveal>
        <p className="eyebrow">PRODUCTO DESTACADO</p>
        <h2>Moni</h2>
        <h3>Control total de tus finanzas, sin complicaciones.</h3>
        <p className="muted">
          Monitorea tus ingresos, gastos y metas en un solo lugar. Diseñada para
          ser simple, rápida y realmente útil.
        </p>

        <ul className="feature-list">
          {features.map(([Icon, label]) => (
            <li key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="product-actions">
          <a
            className="button button-primary"
            href="https://moni.zehrty.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Conocer Moni <FiArrowRight />
          </a>
          <a
            className="button button-outline"
            href="https://moni.zehrty.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Ver casos de uso
          </a>
        </div>
      </div>

      <div className="dashboard-wrap" data-reveal>
        <MiniDashboard />
        <p className="hand-note dashboard-note">
          Pequeñas decisiones,
          <br />
          grandes resultados.
        </p>
      </div>
    </section>
  );
}
