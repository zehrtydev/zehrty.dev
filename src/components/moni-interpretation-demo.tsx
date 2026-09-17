"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import type { HomeContent } from "@/content/home";
import {
  MONI_DEMO_SOURCE,
  parseMoniDemo,
  type MoniDemoInterpretation,
} from "@/lib/moni-demo-parser";

type DemoContent = HomeContent["work"]["demo"];

export function MoniInterpretationDemo({ content }: { content: DemoContent }) {
  const inputId = useId();
  const hintId = useId();
  const errorId = useId();
  const captionId = useId();
  const [input, setInput] = useState(MONI_DEMO_SOURCE);
  const [interpretation, setInterpretation] = useState<MoniDemoInterpretation | null>(() =>
    parseMoniDemo(MONI_DEMO_SOURCE),
  );
  const [error, setError] = useState("");
  const [run, setRun] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const announcementTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (announcementTimeout.current !== null) {
        window.clearTimeout(announcementTimeout.current);
      }
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = parseMoniDemo(input);

    if (!parsed) {
      if (announcementTimeout.current !== null) {
        window.clearTimeout(announcementTimeout.current);
        announcementTimeout.current = null;
      }
      setAnnouncement("");
      setInterpretation(null);
      setError(content.invalidMessage);
      return;
    }

    setError("");
    setInterpretation(parsed);
    setRun((current) => current + 1);
    setAnnouncement("");

    if (announcementTimeout.current !== null) {
      window.clearTimeout(announcementTimeout.current);
    }

    announcementTimeout.current = window.setTimeout(() => {
      setAnnouncement(content.announcement);
      announcementTimeout.current = null;
    }, 50);
  }

  const fields = interpretation
    ? [
        { label: content.fields.amount, value: interpretation.amount, stage: "primary" },
        {
          label: content.fields.category,
          value: content.values[interpretation.category],
          stage: "primary",
        },
        {
          label: content.fields.transactionType,
          value: content.values[interpretation.transactionType],
          stage: "secondary",
        },
        {
          label: content.fields.date,
          value: content.values[interpretation.date],
          stage: "secondary",
        },
        {
          label: content.fields.review,
          value: content.values[interpretation.review],
          stage: "final",
        },
      ]
    : [];

  return (
    <figure className="moni-demo" aria-labelledby={captionId} data-viewport-reveal="moni-demo">
      <div className="moni-demo-grid">
        <div className="moni-demo-input-panel">
          <p className="moni-demo-kicker">{content.title}</p>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor={inputId}>{content.inputLabel}</label>
            <div className="moni-demo-control">
              <input
                id={inputId}
                name="moni-demo-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`}
                aria-invalid={error ? true : undefined}
                autoComplete="off"
                spellCheck="false"
              />
              <button className="button button-primary" type="submit">
                {content.submitLabel}
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <p id={hintId} className="moni-demo-hint">
              {content.inputHint}
            </p>
            {error ? (
              <p id={errorId} className="moni-demo-error" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </div>

        <div className="moni-demo-output-panel" data-state={interpretation ? "ready" : "idle"}>
          {interpretation ? (
            <div key={run} className="moni-demo-sequence">
              <div className="moni-demo-source">
                <span className="moni-demo-source-label">{content.sourceLabel}</span>
                <p className="moni-demo-phrase">
                  <strong className="moni-demo-token">{interpretation.amount}</strong>
                  {" en "}
                  <strong className="moni-demo-token">comida</strong>
                </p>
              </div>

              <div className="moni-demo-causal-rule" aria-hidden="true" />

              <div className="moni-demo-result">
                <p className="moni-demo-kicker">{content.resultLabel}</p>
                <dl>
                  {fields.map((field) => (
                    <div data-stage={field.stage} key={field.label}>
                      <dt>{field.label}</dt>
                      <dd>{field.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="moni-demo-persistence" data-persisted={interpretation.persisted}>
                  <span>{content.persistenceLabel}</span>
                  <strong>{content.values.notPersisted}</strong>
                </div>
              </div>
            </div>
          ) : (
            <p className="moni-demo-idle">{content.idleMessage}</p>
          )}
        </div>
      </div>

      <figcaption id={captionId}>
        <span>{content.captionLabel}</span>
        {content.caption}
        <small>{content.disclaimer}</small>
      </figcaption>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </figure>
  );
}
