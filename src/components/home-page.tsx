import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { HeroSection } from "./hero-section";
import { MoniInterpretationDemo } from "./moni-interpretation-demo";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ViewportRevealController } from "./viewport-reveal-controller";
import { WorkflowDiagram } from "./workflow-diagram";

const EMAIL = "soporte@zehrty.dev";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function HomePage({ content }: { content: HomeContent }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <ViewportRevealController />
      <SiteHeader content={content} />

      <main id="main-content">
        <HeroSection hero={content.hero} />

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-shell work-shell">
            <div className="work-handoff" data-viewport-reveal="work-handoff">
              <div className="work-handoff-rule" aria-hidden="true">
                <span />
              </div>
              <div className="work-marker">
                <span aria-hidden="true">02</span>
                <p>{content.work.sectionLabel}</p>
              </div>
              <div className="editorial-grid work-intro">
                <div className="work-heading">
                  <div className="work-title-clip">
                    <h2 id="work-title">{content.work.title}</h2>
                  </div>
                  <p className="work-lead">{content.work.intro}</p>
                </div>
                <div className="work-narrative">
                  <p>{content.work.friction}</p>
                </div>
              </div>
            </div>

            <MoniInterpretationDemo content={content.work.demo} />

            <WorkflowDiagram work={content.work} />

            <div className="editorial-grid work-evidence">
              <div>
                <h3>{content.work.roleLabel}</h3>
                <p>{content.work.role}</p>
              </div>
              <div>
                <h3>{content.work.statusLabel}</h3>
                <p>{content.work.status}</p>
              </div>
            </div>

            <div className="work-actions">
              <Link className="button button-primary" href={content.work.caseStudyHref}>
                {content.work.caseStudyLabel}
                <span aria-hidden="true">→</span>
              </Link>
              <a
                className="button button-secondary"
                href="https://moni.zehrty.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.work.productLabel}
                <span className="sr-only">
                  {content.locale === "es" ? " (abre en una pestaña nueva)" : " (opens in a new tab)"}
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section-shell about-section"
          aria-labelledby="about-title"
          data-viewport-reveal="about"
        >
          <div className="about-handoff-rule" aria-hidden="true">
            <span />
          </div>
          <div className="about-marker">
            <span aria-hidden="true">03</span>
            <p>{content.about.sectionLabel}</p>
          </div>
          <div className="editorial-grid about-grid">
            <div className="about-heading">
              <h2 id="about-title">
                <span className="sr-only">{content.about.title}</span>
                <span aria-hidden="true">
                  {content.about.headlineLines.map((line) => (
                    <span className="about-title-line" key={line}>
                      <span>{line}</span>
                    </span>
                  ))}
                </span>
              </h2>
            </div>
            <div className="about-content">
              <dl className="about-context-list">
                {content.about.contexts.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="about-bio">{content.about.bio}</p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-shell contact-section"
          aria-labelledby="contact-title"
          data-viewport-reveal="contact"
        >
          <div className="contact-marker">
            <span aria-hidden="true">04</span>
            <p>{content.contact.sectionLabel}</p>
          </div>
          <div className="contact-content">
            <h2 id="contact-title">
              <span className="sr-only">{content.contact.title}</span>
              <span aria-hidden="true">
                {content.contact.headlineLines.map((line) => (
                  <span className="contact-title-line" key={line}>
                    <span>{line}</span>
                  </span>
                ))}
              </span>
            </h2>
            <p className="contact-support">{content.contact.body}</p>
            <a className="contact-link" href={`mailto:${EMAIL}`}>
              <span>{content.contact.emailLabel}</span>
              <Arrow />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter
        counterpartHref={content.counterpartHref}
        languageLabel={content.footer.languageLabel}
      />
    </>
  );
}
