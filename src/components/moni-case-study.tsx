import Link from "next/link";
import type { MoniCaseStudyContent } from "@/content/moni";
import { InfrastructureTimeline } from "./infrastructure-timeline";
import { MoniArchitectureDiagram } from "./moni-architecture-diagram";
import { MoniFlowDiagram } from "./moni-flow-diagram";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const MONI_URL = "https://moni.zehrty.dev";

function ExternalProductLink({
  className,
  label,
  externalTabLabel,
}: {
  className: string;
  label: string;
  externalTabLabel: string;
}) {
  return (
    <a className={className} href={MONI_URL} target="_blank" rel="noopener noreferrer">
      {label}
      <span className="sr-only"> {externalTabLabel}</span>
    </a>
  );
}

function PullStatement({ children }: { children: string }) {
  return <blockquote className="case-statement"><p>{children}</p></blockquote>;
}

function ChapterHeading({ id, title }: { id: string; title: string }) {
  const [number, ...rest] = title.split(" — ");

  return (
    <header className="chapter-heading">
      <span aria-hidden="true">{number}</span>
      <h2 id={id}><span className="sr-only">{number} — </span>{rest.join(" — ")}</h2>
    </header>
  );
}

export function MoniCaseStudy({ content }: { content: MoniCaseStudyContent }) {
  return (
    <>
      <a className="skip-link" href="#main-content">{content.skipLabel}</a>
      <SiteHeader content={content} />

      <main id="main-content" className="case-study">
        <section className="case-hero section-shell" aria-labelledby="case-title">
          <div className="editorial-grid case-hero-grid">
            <div className="case-hero-copy">
              <p className="case-eyebrow">{content.hero.eyebrow}</p>
              <h1 id="case-title">{content.hero.title}</h1>
              <p className="case-descriptor">{content.hero.descriptor}</p>
              <p className="case-intro">{content.hero.intro}</p>
              <p className="case-metadata">{content.hero.metadata}</p>
              <div className="case-hero-actions">
                <ExternalProductLink
                  className="button button-primary"
                  label={content.hero.productCta}
                  externalTabLabel={content.externalTabLabel}
                />
                <a className="button button-secondary" href="#case-start">
                  {content.hero.exploreCta}
                </a>
              </div>
            </div>

            <aside className="case-evidence-field" aria-label={content.hero.evidenceLabel}>
              <div className="moni-hero-product-surface">
                <p>{content.flow.draftDisclaimer}</p>
                <div className="moni-hero-product-flow">
                  <div>
                    <span>{content.flow.messageLabel}</span>
                    <strong>{content.flow.message}</strong>
                  </div>
                  <span aria-hidden="true">→</span>
                  <div>
                    <span>{content.flow.structuredLabel}</span>
                    <dl>
                      {content.flow.draft.slice(0, 3).map((item) => (
                        <div key={item.label}>
                          <dt>{item.label}</dt>
                          <dd>{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <div className="case-evidence-meta">
                <p>{content.hero.evidenceLabel}</p>
                <dl>
                  {content.hero.evidence.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section id="case-start" className="case-chapter case-problem section-shell" aria-labelledby="problem-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="problem-title" title={content.problem.title} /></div>
            <div className="chapter-reading">
              {content.problem.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <PullStatement>{content.problem.statement}</PullStatement>
            </div>
          </div>
        </section>

        <section className="case-chapter case-chapter-surface section-shell" aria-labelledby="decision-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="decision-title" title={content.decision.title} /></div>
            <div className="chapter-reading">
              {content.decision.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className="responsibility-fields">
            {content.decision.responsibilities.map((item, index) => (
              <section
                className={index === 1 ? "responsibility-field-product" : undefined}
                key={item.label}
              >
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <strong>{item.example}</strong>
                <span>{item.detail}</span>
              </section>
            ))}
          </div>

          <div className="case-reading case-reading-after">
            {content.decision.continuation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <PullStatement>{content.decision.statement}</PullStatement>
          </div>
        </section>

        <section className="case-chapter section-shell" aria-labelledby="flow-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="flow-title" title={content.flow.title} /></div>
            <p className="chapter-lead">{content.flow.opening}</p>
          </div>

          <MoniFlowDiagram flow={content.flow} />

          <dl className="flow-explanations">
            {content.flow.explanations.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <PullStatement>{content.flow.statement}</PullStatement>
        </section>

        <section className="case-chapter case-chapter-surface section-shell" aria-labelledby="architecture-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="architecture-title" title={content.architecture.title} /></div>
            <p className="chapter-lead">{content.architecture.body}</p>
          </div>

          <MoniArchitectureDiagram architecture={content.architecture} />

          <div className="architecture-notes">
            <div className="role-note">
              <span>{content.architecture.roleLabel}</span>
              <strong>{content.architecture.role}</strong>
            </div>
            <dl>
              {content.architecture.aiUse.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <PullStatement>{content.architecture.statement}</PullStatement>
        </section>

        <section className="case-chapter section-shell" aria-labelledby="production-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="production-title" title={content.production.title} /></div>
            <div className="chapter-reading">
              {content.production.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <InfrastructureTimeline timeline={content.production.timeline} />

          <div className="operations-responsibilities">
            <h3>{content.production.responsibilitiesLabel}</h3>
            <ul>
              {content.production.responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <PullStatement>{content.production.statement}</PullStatement>
          <p className="case-closing-line">{content.production.closing}</p>
        </section>

        <section className="case-chapter case-users section-shell" aria-labelledby="users-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="users-title" title={content.users.title} /></div>
            <div className="chapter-reading">
              {content.users.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <dl className="user-evidence">
            {content.users.evidence.map((item, index) => (
              <div key={item.label} className={index === 0 ? "user-count" : undefined}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="case-reading case-reading-after">
            {content.users.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <ol className="product-evolution">
            {content.users.evolution.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>
            ))}
          </ol>

          <PullStatement>{content.users.statement}</PullStatement>

          <div className="learning-block">
            <h3>{content.users.learningTitle}</h3>
            <ul>{content.users.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul>
          </div>
          <p className="case-reflection">{content.users.reflection}</p>
          <p className="current-state-line">{content.users.currentState}</p>
        </section>

        <section className="case-closing section-shell" aria-labelledby="closing-title">
          <div className="case-closing-content">
            <h2 id="closing-title">{content.closing.statement}</h2>
            <p>{content.closing.body}</p>
            <div className="case-closing-actions">
              <ExternalProductLink
                className="button button-primary"
                label={content.closing.productCta}
                externalTabLabel={content.externalTabLabel}
              />
              <Link className="editorial-link" href={content.closing.backHref}>
                {content.closing.backCta}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        counterpartHref={content.counterpartHref}
        languageLabel={content.footerLanguageLabel}
      />
    </>
  );
}
