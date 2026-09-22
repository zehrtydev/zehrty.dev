import {
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiGit,
} from "react-icons/si";
import { FiCloud, FiLink2 } from "react-icons/fi";

const items = [
  [SiNodedotjs, "Node.js"],
  [SiTypescript, "TypeScript"],
  [SiPostgresql, "PostgreSQL"],
  [SiDocker, "Docker"],
  [FiCloud, "AWS"],
  [SiLinux, "Linux"],
  [SiGit, "Git"],
  [FiLink2, "APIs"],
] as const;

export function TechStrip() {
  return (
    <div className="tech-strip">
      <div className="tech-grid shell" aria-label="Tecnologías">
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
