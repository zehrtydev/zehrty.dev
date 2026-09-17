import type { MoniCaseStudyContent } from "@/content/moni";

export function MoniArchitectureDiagram({
  architecture,
}: {
  architecture: MoniCaseStudyContent["architecture"];
}) {
  return (
    <figure
      className="architecture-figure"
      aria-labelledby="architecture-diagram-title"
      aria-describedby="architecture-diagram-summary"
    >
      <figcaption id="architecture-diagram-title" className="case-diagram-label">
        {architecture.systemLabel}
      </figcaption>
      <p id="architecture-diagram-summary" className="sr-only">
        {architecture.systemSummary}
      </p>
      <ol className="architecture-flow" aria-hidden="true">
        {architecture.nodes.map((node, index) => (
          <li key={node.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{node.label}</strong>
            {node.details ? (
              <ul>
                {node.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="operations-layer">
        <span>{architecture.operationsLabel}</span>
        <strong>{architecture.operations}</strong>
      </div>
    </figure>
  );
}
