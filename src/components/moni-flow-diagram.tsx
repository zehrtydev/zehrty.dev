import type { MoniCaseStudyContent } from "@/content/moni";

export function MoniFlowDiagram({ flow }: { flow: MoniCaseStudyContent["flow"] }) {
  return (
    <figure className="case-flow" aria-labelledby="case-flow-title">
      <figcaption id="case-flow-title" className="case-diagram-label">
        {flow.diagramLabel}
      </figcaption>

      <div className="case-flow-grid">
        <div className="case-flow-node case-flow-message">
          <span>{flow.messageLabel}</span>
          <strong>“{flow.message}”</strong>
        </div>

        <span className="case-flow-arrow case-flow-arrow-parser" aria-hidden="true">→</span>

        <div className="case-flow-node case-flow-parser">
          <strong>{flow.parserLabel}</strong>
          <span>{flow.parserDetail}</span>
        </div>

        <div className="case-flow-decision">
          <strong>{flow.decisionLabel}</strong>
        </div>

        <div className="case-flow-branches">
          <div className="case-flow-primary-route">
            <strong>{flow.yesLabel}</strong>
            <span>→ {flow.structuredLabel}</span>
          </div>
          <div className="case-flow-fallback">
            <span>{flow.noLabel}</span>
            <strong>{flow.fallbackLabel}</strong>
            <span>{flow.fallbackDetail}</span>
            <span>→ {flow.structuredLabel}</span>
          </div>
        </div>

        <div className="case-flow-convergence">
          <span>{flow.structuredLabel}</span>
          <span aria-hidden="true">↓</span>
        </div>

        <div className="case-flow-control">
          <div className="case-flow-node case-flow-structured">
            <span>{flow.structuredLabel}</span>
            <strong>{flow.draftLabel}</strong>
            <dl>
              {flow.draft.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <small>{flow.draftDisclaimer}</small>
          </div>

          <span className="case-flow-arrow case-flow-arrow-review" aria-hidden="true">→</span>

          <div className="case-flow-node case-flow-review">
            <strong>{flow.reviewLabel}</strong>
            <span>{flow.reviewDetail}</span>
            <ul>
              {flow.actions.map((action, index) => (
                <li key={action} className={index === 0 ? "action-confirm" : undefined}>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <span className="case-flow-arrow case-flow-arrow-confirm">{flow.actions[0]} →</span>

          <div className="case-flow-node case-flow-persistence">
            <strong>{flow.persistenceLabel}</strong>
            <span>{flow.persistenceDetail}</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
