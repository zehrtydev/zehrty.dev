"use client";

import { useId, useState } from "react";
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
  const [interpretation, setInterpretation] = useState<MoniDemoInterpretation | null>(null);
  const [error, setError] = useState("");
  const [run, setRun] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = parseMoniDemo(input);

    if (!parsed) {
      setInterpretation(null);
      setError(content.invalidMessage);
      return;
    }

    setError("");
    setInterpretation(parsed);
    setRun((current) => current + 1);
  }

  const fields = interpretation
    ? [
        { label: content.fields.amount, value: interpretation.amount },
        {
          label: content.fields.category,
          value: content.values[interpretation.category],
        },
        {
          label: content.fields.transactionType,
          value: content.values[interpretation.transactionType],
        },
        { label: content.fields.date, value: content.values[interpretation.date] },
        { label: content.fields.review, value: content.values[interpretation.review] },
      ]
    : [];

  return (
    <figure className="moni-demo" aria-labelledby={captionId}>
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
                <span>{content.sourceLabel}</span>
                <strong>“{interpretation.source}”</strong>
              </div>

              <div className="moni-demo-causal-rule" aria-hidden="true">
                <span>→</span>
              </div>

              <div className="moni-demo-result">
                <p className="moni-demo-kicker">{content.resultLabel}</p>
                <dl>
                  {fields.map((field) => (
                    <div key={field.label}>
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

      <p key={run} className="sr-only" aria-live="polite" aria-atomic="true">
        {interpretation ? content.announcement : ""}
      </p>
    </figure>
  );
}
