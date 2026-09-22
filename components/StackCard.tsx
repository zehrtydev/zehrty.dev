import type { CSSProperties, PointerEvent } from "react";
import type { Technology } from "./technologies";
import styles from "./TechStack.module.css";

type Props = {
  technology: Technology;
  offset: number;
  onSelect: () => void;
  onPreview: (event: PointerEvent<HTMLButtonElement>) => void;
};

export function StackCard({ technology, offset, onSelect, onPreview }: Props) {
  const active = offset === 0;
  const distance = Math.abs(offset);
  const direction = Math.sign(offset);
  const Icon = technology.icon;
  const style = {
    "--offset": offset,
    "--distance": distance,
    "--direction": direction,
    "--scale": active ? 1 : 0.9 - (distance - 1) * 0.037,
    "--rotation-y": `${direction * Math.min(7 + distance * 2, 18)}deg`,
    "--rotation-z": `${-direction * Math.min(distance * 1.1, 6)}deg`,
    "--card-opacity": active ? 1 : 0.94 - distance * 0.035,
    "--logo-color": technology.color,
    zIndex: active ? 20 : 12 - distance,
  } as CSSProperties;

  return (
    <button
      type="button"
      className={styles.card}
      style={style}
      data-active={active}
      data-offset={offset}
      data-technology={technology.id}
      tabIndex={active ? 0 : -1}
      aria-label={technology.name}
      aria-pressed={active}
      aria-describedby={active ? `${technology.id}-details` : undefined}
      onClick={onSelect}
      onPointerMove={onPreview}
    >
      <span className={styles.identity}>
        <span className={styles.logo}><Icon aria-hidden="true" /></span>
        <span className={styles.name}>{technology.name}</span>
      </span>
      <span className={styles.details} id={`${technology.id}-details`} aria-hidden={!active}>
        <span className={styles.description}>{technology.description}</span>
        <span className={styles.tags}>
          {technology.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </span>
        <span className={styles.projects}>
          <span className={styles.projectsLabel}>PROYECTOS</span>
          <span>{technology.projects.join(" · ")}</span>
        </span>
      </span>
    </button>
  );
}
