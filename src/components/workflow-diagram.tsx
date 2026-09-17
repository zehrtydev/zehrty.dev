import type { HomeContent } from "@/content/home";

export function WorkflowDiagram({ work }: { work: HomeContent["work"] }) {
  const fallback = work.workflow.find((step) => step.emphasis);
  const primaryPath = work.workflow.filter((step) => !step.emphasis);

  if (!fallback) return null;

  return (
    <figure
      className="workflow-figure"
      aria-labelledby="workflow-title"
      data-viewport-reveal="workflow"
    >
      <figcaption className="workflow-caption">
        <h3 id="workflow-title">{work.workflowTitle}</h3>
        <p>{work.workflowDescription}</p>
      </figcaption>
      <div className="workflow-canvas" aria-hidden="true">
        <svg
          className="workflow-connectors"
          viewBox="0 0 1000 320"
          preserveAspectRatio="none"
          focusable="false"
        >
          <defs>
            <marker id="arrow-standard" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0 0L8 4L0 8" />
            </marker>
            <marker id="arrow-fallback" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0 0L8 4L0 8" />
            </marker>
          </defs>
          <path className="connector-primary connector-primary-1" d="M155 72H212" pathLength="1" />
          <path className="connector-primary connector-primary-2" d="M365 72H422" pathLength="1" />
          <path className="connector-primary connector-primary-3" d="M575 72H632" pathLength="1" />
          <path className="connector-primary connector-primary-4" d="M785 72H842" pathLength="1" />
          <path className="connector-fallback" d="M290 140V194H500V140" pathLength="1" />
        </svg>

        <ol className="workflow-primary">
          {primaryPath.map((step, index) => (
            <li className={`workflow-node workflow-node-${index + 1}`} key={step.label}>
              <span className="workflow-copy">
                <strong>{step.label}</strong>
                <span>{step.detail}</span>
              </span>
              {index === 1 ? (
                <div className="workflow-fallback">
                  <span>{fallback.detail}</span>
                  <strong>{fallback.label}</strong>
                  <span>→ {primaryPath[2].label}</span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="sr-only">
        <ol>
          {primaryPath.map((step, index) => (
            <li key={step.label}>
              {step.label}: {step.detail}
              {index === 1 ? (
                <p>
                  {fallback.label}: {fallback.detail}. → {primaryPath[2].label}.
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
