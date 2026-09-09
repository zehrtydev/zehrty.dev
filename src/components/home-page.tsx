import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { SiteHeader } from "./site-header";
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
      <SiteHeader content={content} />

      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="editorial-grid hero-grid">
            <div className="hero-primary">
              <h1 id="hero-title">{content.hero.firstSentence}</h1>
              <p>{content.hero.secondSentence}</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#work">
                  {content.hero.primaryCta}
                  <span aria-hidden="true">↓</span>
                </Link>
                <Link className="button button-secondary" href="#contact">
                  {content.hero.secondaryCta}
                </Link>
              </div>
            </div>

            <dl className="hero-context">
              {content.hero.context.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-shell work-shell">
            <div className="work-marker">
              <span aria-hidden="true">02</span>
              <p>{content.work.sectionLabel}</p>
            </div>
            <div className="editorial-grid work-intro">
              <div className="work-heading">
                <h2 id="work-title">{content.work.title}</h2>
                <p className="work-lead">{content.work.intro}</p>
              </div>
              <div className="work-narrative">
                <p>{content.work.friction}</p>
              </div>
            </div>

            <figure className="product-visualization" aria-labelledby="product-visualization-caption">
              <div className="product-input">
                <span>{content.work.exampleLabel}</span>
                <strong>“{content.work.example}”</strong>
                <div className="input-line" aria-hidden="true" />
              </div>
              <div className="product-output">
                <span className="interpretation-arrow" aria-hidden="true">→</span>
                <dl>
                  {content.work.interpretation.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <figcaption id="product-visualization-caption">
                <span>{content.work.visualizationLabel}</span>
                {content.work.exampleResult}
              </figcaption>
            </figure>

            <WorkflowDiagram work={content.work} />

            <div className="editorial-grid work-evidence">
              <div>
                <h3>{content.work.roleLabel}</h3>
                <p>{content.work.role}</p>
              </div>
              <div>
                <h3>{content.work.statusLabel}</h3>
                <p>{content.work.status}</p>
                <Link className="editorial-link" href={content.work.caseStudyHref}>
                  {content.work.caseStudyCta} <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell quiet-section" aria-labelledby="about-title">
          <div className="editorial-grid about-grid">
            <div>
              <p className="section-kicker">{content.about.sectionLabel}</p>
              <h2 id="about-title">{content.about.title}</h2>
            </div>
            <div className="about-content">
              <p className="about-bio">{content.about.bio}</p>
              <p className="about-support">{content.about.supportingLine}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
          <p className="section-kicker">{content.contact.sectionLabel}</p>
          <div className="contact-content">
            <h2 id="contact-title">{content.contact.title}</h2>
            <p>{content.contact.body}</p>
            <a className="contact-link" href={`mailto:${EMAIL}`}>
              {content.contact.emailLabel} <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-inner">
          <span className="footer-wordmark">Zehrtydev</span>
          <span>© {new Date().getFullYear()}</span>
          <Link href={content.counterpartHref}>{content.footer.languageLabel}</Link>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </footer>
    </>
  );
}
