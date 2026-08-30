"use client";

import { useState } from "react";

const steps = [
  "Territory loaded",
  "Address selected",
  "Disposition recorded",
  "Demo offer selected",
  "Installation slot reserved",
  "Synthetic sale submitted"
];

const locations = [
  { pin: "A", address: "1840 Example Lane", detail: "Serviceable · Fiber ready", className: "pin-a" },
  { pin: "B", address: "72 Sample Street", detail: "Serviceable · Follow-up", className: "pin-b" },
  { pin: "C", address: "905 Demo Road", detail: "Serviceable · New lead", className: "pin-c" }
];

const nextActions: Record<number, string> = {
  2: "Record disposition",
  3: "Select demo offer",
  4: "Reserve installation slot",
  5: "Submit synthetic sale"
};

export function FieldOSDemo() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(2);
  const location = locations[selectedLocation];
  const workflowComplete = completedSteps >= steps.length;

  function selectLocation(index: number) {
    setSelectedLocation(index);
    setCompletedSteps(2);
  }

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
          {locations.map((item, index) => (
            <button
              type="button"
              className={`map-pin ${item.className} ${selectedLocation === index ? "active" : ""}`}
              onClick={() => selectLocation(index)}
              aria-label={`Select ${item.address}`}
              aria-pressed={selectedLocation === index}
              key={item.pin}
            >
              {item.pin}
            </button>
          ))}
          <div className="map-instruction">Select a location pin</div>
          <span className="map-label">Demo Territory 07 · 3 fictional locations</span>
        </div>
        <div className="field-panel">
          <div className="field-address">
            <span>Selected service location</span>
            <strong>{location.address}</strong>
            <small>{location.detail}</small>
          </div>
          <div className="workflow-progress" aria-label={`${completedSteps} of ${steps.length} workflow steps complete`}>
            <div style={{ width: `${(completedSteps / steps.length) * 100}%` }} />
          </div>
          <div className="step-list">
            {steps.map((label, index) => (
              <div className={`step-item ${index < completedSteps ? "done" : index === completedSteps ? "current" : ""}`} key={label}>
                <span>{index < completedSteps ? "✓" : index + 1}</span>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <div className="field-actions">
            <button type="button" className="demo-secondary" onClick={() => setCompletedSteps((value) => Math.max(2, value - 1))} disabled={completedSteps <= 2}>
              Back
            </button>
            {workflowComplete ? (
              <button type="button" onClick={() => setCompletedSteps(2)}>Restart demo</button>
            ) : (
              <button type="button" onClick={() => setCompletedSteps((value) => Math.min(value + 1, steps.length))}>
                {nextActions[completedSteps]}
              </button>
            )}
          </div>
          {workflowComplete && (
            <p className="demo-note">The demo simulates the user flow only. Production pricing, customer data, scheduling rules, and integrations are intentionally excluded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
