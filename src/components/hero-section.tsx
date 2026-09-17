import Link from "next/link";
import type { HomeContent } from "@/content/home";

export function HeroSection({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="editorial-grid hero-grid">
        <div className="hero-rule" aria-hidden="true" />

        <div className="hero-primary">
          <h1 id="hero-title" aria-label={hero.firstSentence}>
            {hero.headlineLines.map((line, index) => (
              <span className="hero-line" key={line}>
                <span>{line}</span>
                {index < hero.headlineLines.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p>{hero.secondSentence}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#work">
              {hero.primaryCta}
              <span aria-hidden="true">↓</span>
            </Link>
            <Link className="button button-secondary" href="#contact">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <dl className="hero-context">
          {hero.context.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
