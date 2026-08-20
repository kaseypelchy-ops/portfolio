"use client";

import { useEffect, useState } from "react";

const pipeline = [
  "Eligibility check",
  "Duplicate check",
  "Processing lock",
  "Structured AI evaluation",
  "Application scoring",
  "Persist result",
  "Create coaching recommendation",
];

export function AIQualityDemo() {
  const [running, setRunning] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (!running || index >= pipeline.length - 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = index + 1;

      setIndex(nextIndex);

      if (nextIndex >= pipeline.length - 1) {
        setRunning(false);
      }
    }, 550);

    return () => window.clearTimeout(timer);
  }, [running, index]);

  const complete = index >= pipeline.length - 1;

  const startAnalysis = () => {
    setIndex(-1);
    setRunning(true);
  };

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div>
          <p className="eyebrow">Synthetic interactive demo</p>
          <h3>Call analysis pipeline</h3>
        </div>

        <button
          type="button"
          onClick={startAnalysis}
          disabled={running}
        >
          {running ? "Processing…" : "Analyze sample call"}
        </button>
      </div>

      <div className="pipeline-list">
        {pipeline.map((label, i) => (
          <div
            className={`pipeline-step ${i <= index ? "done" : ""}`}
            key={label}
          >
            <span>
              {i <= index ? "✓" : String(i + 1).padStart(2, "0")}
            </span>
            <p>{label}</p>
          </div>
        ))}
      </div>

      {complete && (
        <div className="qa-result">
          <div>
            <span>Synthetic QA score</span>
            <strong>91</strong>
          </div>

          <div>
            <span>Coaching focus</span>
            <strong>Clarify resolution summary</strong>
            <p>Generated from a fictional structured evaluation.</p>
          </div>
        </div>
      )}
    </div>
  );
}