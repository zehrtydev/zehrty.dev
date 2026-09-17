import type { MoniCaseStudyContent } from "@/content/moni";

export function MoniReviewPersistence({ flow }: { flow: MoniCaseStudyContent["flow"] }) {
  return (
    <figure
      className="review-flow"
      aria-labelledby="review-flow-title"
      aria-describedby="review-flow-summary"
      data-viewport-reveal="review-flow"
    >
      <figcaption id="review-flow-title" className="case-diagram-label">
        {flow.reviewTitle}
      </figcaption>
      <p id="review-flow-summary" className="sr-only">{flow.reviewSummary}</p>

      <div className="review-map" aria-hidden="true">
        <div className="review-stage review-interpretation">
          <small>01</small>
          <strong>{flow.structuredLabel}</strong>
        </div>
        <span className="review-connector review-connector-in" />
        <div className="review-stage review-gate">
          <small>02</small>
          <strong>{flow.reviewLabel}</strong>
          <span>{flow.reviewDetail}</span>
        </div>
        <span className="review-connector review-connector-choice" />
        <div className="review-choices">
          {flow.actions.map((action) => (
            <div
              className={action.persists ? "review-choice review-choice-confirm" : "review-choice"}
              key={action.label}
            >
              <strong>{action.label}</strong>
              <span>{action.detail}</span>
              {action.persists ? (
                <>
                  <span className="review-confirm-line" />
                  <div className="review-stage review-persistence">
                    <small>03</small>
                    <strong>{flow.persistenceLabel}</strong>
                    <span>{flow.persistenceDetail}</span>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
