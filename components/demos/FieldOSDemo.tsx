"use client";

import { useState } from "react";

const steps = [
  "Territory selected",
  "Address opened",
  "Disposition recorded",
  "Demo offer selected",
  "Installation slot reserved",
  "Synthetic sale submitted"
];

export function FieldOSDemo() {
  const [step, setStep] = useState(0);

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div>
          <p className="eyebrow">Synthetic interactive demo</p>
          <h3>Field sales workflow</h3>
        </div>
        <span className="demo-badge">Offline-safe concept</span>
      </div>

      <div className="fieldos-layout">
        <div className="fake-map" aria-label="Synthetic territory map">
          <div className="map-grid" />
          <div className="map-pin pin-a">A</div>
          <div className="map-pin pin-b">B</div>
          <div className="map-pin pin-c">C</div>
          <span className="map-label">Demo Territory 07</span>
        </div>
        <div className="field-panel">
          <div className="field-address">
            <span>Selected service location</span>
            <strong>1840 Example Lane</strong>
            <small>Fictional address · serviceable</small>
          </div>
          <div className="step-list">
            {steps.map((label, index) => (
              <div className={`step-item ${index < step ? "done" : index === step ? "current" : ""}`} key={label}>
                <span>{index < step ? "✓" : index + 1}</span>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setStep((value) => Math.min(value + 1, steps.length))} disabled={step >= steps.length}>
            {step >= steps.length ? "Workflow complete ✓" : `Continue: ${steps[step]}`}
          </button>
          {step >= steps.length && (
            <p className="demo-note">The demo simulates the user flow only. Production pricing, customer data, scheduling rules, and integrations are intentionally excluded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
