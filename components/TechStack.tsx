"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { StackCard } from "./StackCard";
import { technologies } from "./technologies";
import styles from "./TechStack.module.css";

const count = technologies.length;
const normalize = (index: number) => (index + count) % count;

// Keep the same circular order, with six cards to the left and five to the right.
function relativeOffset(index: number, active: number) {
  return normalize(index - active + count / 2) - count / 2;
}

export function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hoverAfter = useRef(0);
  const lastPointer = useRef({ x: -1, y: -1 });
  const touchStart = useRef<{ x: number; y: number; id: number } | null>(null);
  const suppressClick = useRef(false);

  function select(index: number, focusCard = false) {
    const next = normalize(index);
    hoverAfter.current = performance.now() + 560;
    setActiveIndex(next);
    if (focusCard) {
      sectionRef.current?.querySelector<HTMLButtonElement>(
        `[data-technology="${technologies[next].id}"]`,
      )?.focus({ preventScroll: true });
    }
  }

  function preview(event: PointerEvent<HTMLButtonElement>, index: number) {
    if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (min-width: 921px)").matches) return;
    const moved = event.clientX !== lastPointer.current.x || event.clientY !== lastPointer.current.y;
    lastPointer.current = { x: event.clientX, y: event.clientY };
    // Moving cards must never trigger another selection beneath a stationary cursor.
    if (moved && performance.now() >= hoverAfter.current && index !== activeIndex) select(index);
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    const targets: Record<string, number> = {
      ArrowLeft: activeIndex - 1, ArrowRight: activeIndex + 1,
      Home: 0, End: count - 1,
    };
    if (!(event.key in targets) || event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    const onCard = (event.target as HTMLElement).closest("[data-technology]") !== null;
    select(targets[event.key], onCard);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" || !event.isPrimary) return;
    suppressClick.current = false;
    touchStart.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      suppressClick.current = true;
      select(activeIndex + (dx < 0 ? 1 : -1));
    }
  }

  return (
    <section
      className={styles.section}
      id="tecnologias"
      ref={sectionRef}
      aria-labelledby="tech-stack-title"
      onKeyDown={onKeyDown}
      data-reveal
    >
      <header className={`${styles.header} shell`}>
        <p className={`eyebrow ${styles.eyebrow}`}>TECNOLOGÍAS</p>
        <h2 id="tech-stack-title">Mi stack <span>detrás de cada producto.</span></h2>
        <p className={styles.subtitle}>Herramientas que uso para convertir ideas en productos reales, escalables y mantenibles.</p>
      </header>

      <div
        className={styles.deck}
        role="group"
        aria-label="Explorar tecnologías. Usa las flechas izquierda y derecha para seleccionar."
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { touchStart.current = null; }}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
      >
        {technologies.map((technology, index) => (
          <StackCard
            key={technology.id}
            technology={technology}
            offset={relativeOffset(index, activeIndex)}
            onSelect={() => select(index)}
            onPreview={(event) => preview(event, index)}
          />
        ))}
      </div>

      <div className={`${styles.footer} shell`}>
        <div className={styles.controls} role="group" aria-label="Navegación de tecnologías">
          <button type="button" className={styles.arrow} onClick={() => select(activeIndex - 1)} aria-label="Tecnología anterior"><FiChevronLeft aria-hidden="true" /></button>
          <div className={styles.indicators}>
            {technologies.map((technology, index) => (
              <button
                type="button"
                key={technology.id}
                aria-label={`Ver ${technology.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={styles.indicator}
                onClick={() => select(index)}
              ><span /></button>
            ))}
          </div>
          <button type="button" className={styles.arrow} onClick={() => select(activeIndex + 1)} aria-label="Tecnología siguiente"><FiChevronRight aria-hidden="true" /></button>
        </div>
        <p className={styles.rail}>TECNOLOGÍA AL SERVICIO<br />DE PRODUCTOS REALES.</p>
      </div>
      <p className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">
        {technologies[activeIndex].name}. {activeIndex + 1} de {count}.
      </p>
    </section>
  );
}
