import type { MoniCaseStudyContent } from "@/content/moni";

export function MoniFlowDiagram({ flow }: { flow: MoniCaseStudyContent["flow"] }) {
  return (
    <figure
      className="case-pipeline"
      aria-labelledby="case-pipeline-title"
      aria-describedby="case-pipeline-summary"
      data-viewport-reveal="case-pipeline"
    >
      <figcaption id="case-pipeline-title" className="case-diagram-label">
        {flow.diagramLabel}
      </figcaption>
      <p id="case-pipeline-summary" className="sr-only">{flow.diagramSummary}</p>

      <div className="pipeline-map" aria-hidden="true">
        <div className="pipeline-stage pipeline-message">
          <span>01</span>
          <small>{flow.messageLabel}</small>
          <strong>{flow.message}</strong>
        </div>
        <span className="pipeline-connector pipeline-connector-one" />
        <div className="pipeline-stage pipeline-parser">
          <span>02</span>
          <strong>{flow.parserLabel}</strong>
          <small>{flow.parserDetail}</small>
        </div>
        <div className="pipeline-routes">
          <div className="pipeline-primary-route">
            <span className="pipeline-route-line" />
            <div>
              <small>{flow.yesLabel}</small>
              <strong>{flow.structuredLabel}</strong>
            </div>
          </div>
          <div className="pipeline-fallback-route">
            <span className="pipeline-route-line" />
            <div>
              <small>{flow.noLabel}</small>
              <strong>{flow.fallbackLabel}</strong>
              <p>{flow.fallbackDetail}</p>
              <span className="pipeline-fallback-destination">↳ {flow.structuredLabel}</span>
            </div>
          </div>
        </div>
        <span className="pipeline-connector pipeline-connector-two" />
        <div className="pipeline-stage pipeline-output">
          <span>03</span>
          <strong>{flow.structuredLabel}</strong>
        </div>
      </div>

      <dl className="flow-explanations">
        {flow.explanations.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.detail}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
