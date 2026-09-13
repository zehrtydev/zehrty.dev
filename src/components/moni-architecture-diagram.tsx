import type { MoniCaseStudyContent } from "@/content/moni";

export function MoniArchitectureDiagram({
  architecture,
}: {
  architecture: MoniCaseStudyContent["architecture"];
}) {
  return (
    <figure className="architecture-figure" aria-labelledby="architecture-diagram-title">
      <figcaption id="architecture-diagram-title" className="case-diagram-label">
        {architecture.systemLabel}
      </figcaption>
      <ol className="architecture-flow">
        {architecture.nodes.map((node) => (
          <li key={node.label}>
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
