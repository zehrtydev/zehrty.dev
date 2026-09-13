import type { MoniCaseStudyContent } from "@/content/moni";

export function InfrastructureTimeline({
  timeline,
}: {
  timeline: MoniCaseStudyContent["production"]["timeline"];
}) {
  return (
    <ol className="infrastructure-timeline">
      {timeline.map((step, index) => (
        <li key={step.label}>
          <span className="timeline-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <strong>{step.label}</strong>
          <p>{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
