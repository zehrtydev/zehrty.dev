import {
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";

const items = [
  [SiTypescript, "TypeScript"],
  [SiNextdotjs, "Next.js"],
  [SiNodedotjs, "Node.js"],
  [SiPostgresql, "PostgreSQL"],
  [SiDocker, "Docker"],
  [SiSupabase, "Supabase"],
] as const;

export function TechStrip() {
  return (
    <div className="tech-strip">
      <div className="tech-grid shell" aria-label="Stack principal">
        <span className="tech-strip-label">STACK PRINCIPAL</span>
        {items.map(([Icon, label]) => (
          <div className="tech-item" key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
