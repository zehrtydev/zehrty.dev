import { FiArrowRight } from "react-icons/fi";
import { Brand } from "./Brand";

export function Header() {
  return (
    <header className="site-header shell">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegación principal">
        <a className="active" href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#sobre-mi">Experiencia</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a className="header-cta" href="mailto:soporte@zehrty.dev">
        Hablemos <FiArrowRight aria-hidden="true" />
      </a>
    </header>
  );
}
