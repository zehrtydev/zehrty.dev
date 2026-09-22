import { FiArrowRight, FiGithub, FiMail } from "react-icons/fi";
import { Brand } from "./Brand";

export function ContactSection() {
  return (
    <section className="contact-section section-border" id="contacto">
      <div className="contact-grid shell">
        <div className="contact-main" data-reveal>
          <p className="eyebrow">CONTACTO</p>
          <h2>Hablemos.</h2>
          <a className="contact-email" href="mailto:soporte@zehrty.dev">
            soporte@zehrty.dev
          </a>
        </div>

        <div className="contact-aside" data-reveal>
          <p>
            ¿Tienes una idea, un proyecto o simplemente quieres saludar?
            <br />
            Estoy siempre abierto a nuevas oportunidades.
          </p>
          <a className="round-arrow" href="mailto:soporte@zehrty.dev" aria-label="Enviar correo">
            <FiArrowRight />
          </a>
        </div>
      </div>

      <footer className="site-footer shell">
        <div className="footer-brand">
          <Brand />
          <span className="footer-divider" />
          <span>Ideas de hoy. Productos de mañana.</span>
        </div>
        <div className="footer-social">
          <a href="https://github.com/zehrtydev" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="mailto:soporte@zehrty.dev" aria-label="Correo">
            <FiMail />
          </a>
        </div>
      </footer>
    </section>
  );
}
