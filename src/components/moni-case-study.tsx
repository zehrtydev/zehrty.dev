import Link from "next/link";
import type { MoniCaseStudyContent } from "@/content/moni";
import { InfrastructureTimeline } from "./infrastructure-timeline";
import { MoniArchitectureDiagram } from "./moni-architecture-diagram";
import { MoniFlowDiagram } from "./moni-flow-diagram";
import { MoniReviewPersistence } from "./moni-review-persistence";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { ViewportRevealController } from "./viewport-reveal-controller";

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
      <ViewportRevealController />

      <main id="main-content" className="case-study">
        <section
          className="case-hero section-shell"
          aria-labelledby="case-title"
          data-viewport-reveal="case-hero"
        >
          <span className="case-hero-rule" aria-hidden="true" />
          <div className="editorial-grid case-hero-grid">
            <div className="case-hero-copy">
              <p className="case-eyebrow">{content.hero.eyebrow}</p>
              <div className="case-title-clip"><h1 id="case-title">{content.hero.title}</h1></div>
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
              <p>{content.hero.evidenceLabel}</p>
              <dl>
                {content.hero.evidence.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="case-start" className="case-chapter case-input section-shell" aria-labelledby="input-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="input-title" title={content.decision.title} /></div>
            <div className="chapter-reading">
              {content.problem.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {content.decision.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <figure className="case-input-figure" aria-labelledby="case-input-label">
            <figcaption id="case-input-label">{content.flow.messageLabel}</figcaption>
            <p>
              <strong>10000</strong><span> en </span><strong>comida</strong>
            </p>
            <div className="case-input-meaning" aria-hidden="true">
              <span>{content.flow.messageLabel}</span><i />
              <span>{content.flow.structuredLabel}</span>
            </div>
          </figure>

          <div className="responsibility-fields">
            {content.decision.responsibilities.map((item) => (
              <section key={item.label}>
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

        <section className="case-chapter case-pipeline-section section-shell" aria-labelledby="pipeline-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="pipeline-title" title={content.flow.title} /></div>
            <p className="chapter-lead">{content.flow.opening}</p>
          </div>
          <MoniFlowDiagram flow={content.flow} />
        </section>

        <section className="case-chapter case-review-section section-shell" aria-labelledby="review-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="review-title" title={content.flow.reviewTitle} /></div>
            <p className="chapter-lead">{content.flow.reviewDetail}</p>
          </div>
          <MoniReviewPersistence flow={content.flow} />
          <PullStatement>{content.flow.statement}</PullStatement>
        </section>

        <section className="case-chapter case-structured section-shell" aria-labelledby="structured-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="structured-title" title={content.flow.structuredTitle} /></div>
            <p className="chapter-lead">{content.flow.draftDisclaimer}</p>
          </div>
          <div className="structured-output">
            <p>{content.flow.draftLabel}</p>
            <dl>
              {content.flow.draft.map((item, index) => (
                <div key={item.label}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="case-chapter case-system section-shell" aria-labelledby="system-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="system-title" title={content.architecture.title} /></div>
            <p className="chapter-lead">{content.architecture.body}</p>
          </div>
          <MoniArchitectureDiagram architecture={content.architecture} />

          <div className="case-reading case-reading-after">
            {content.production.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <InfrastructureTimeline timeline={content.production.timeline} />
          <div className="operations-responsibilities">
            <h3>{content.production.responsibilitiesLabel}</h3>
            <ul>{content.production.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <PullStatement>{content.production.statement}</PullStatement>
          <p className="case-closing-line">{content.production.closing}</p>
        </section>

        <section className="case-chapter case-development section-shell" aria-labelledby="development-title">
          <div className="editorial-grid chapter-grid">
            <div><ChapterHeading id="development-title" title={content.architecture.developmentTitle} /></div>
            <div className="role-note">
              <span>{content.architecture.roleLabel}</span>
              <strong>{content.architecture.role}</strong>
            </div>
          </div>
          <dl className="development-notes">
            {content.architecture.aiUse.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <PullStatement>{content.architecture.statement}</PullStatement>
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
            <span>{content.closing.eyebrow}</span>
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

      <SiteFooter counterpartHref={content.counterpartHref} languageLabel={content.footerLanguageLabel} />
    </>
  );
}
