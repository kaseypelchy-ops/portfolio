"use client";

import { useState } from "react";

const steps = [
  "Work area loaded",
  "Location selected",
  "Outcome recorded",
  "Package selected",
  "Appointment reserved",
  "Transaction submitted"
];

const locations = [
  { pin: "A", address: "1840 Example Lane", detail: "Eligible · Ready for service", className: "pin-a" },
  { pin: "B", address: "72 Sample Street", detail: "Eligible · Follow-up", className: "pin-b" },
  { pin: "C", address: "905 Demo Road", detail: "Eligible · New opportunity", className: "pin-c" }
];

const nextActions: Record<number, string> = {
  2: "Record outcome",
  3: "Select demo package",
  4: "Reserve appointment",
  5: "Submit transaction"
};

export function FieldOSDemo() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(2);
  const location = locations[selectedLocation];
  const workflowComplete = completedSteps >= steps.length;
  const mapEvents = [
    { eyebrow: "Location opened", title: location.address, label: "Eligibility", value: location.detail, status: "Ready for outcome" },
    { eyebrow: "Outcome saved", title: "Interested", label: "Follow-up", value: "Customer requested package details", status: "Synced to work area" },
    { eyebrow: "Package selected", title: "Premium Plan", label: "Demo configuration", value: "Approved selection snapshot saved", status: "Ready to schedule" },
    { eyebrow: "Capacity reserved", title: "Tuesday · 10:00 AM", label: "Appointment window", value: "Shared slot held for this location", status: "Slot confirmed" },
    { eyebrow: "Transaction submitted", title: "Workflow complete", label: "Next action", value: "Confirmation and review queued", status: "Synced successfully" }
  ];
  const mapEvent = mapEvents[Math.min(completedSteps - 2, mapEvents.length - 1)];

  function selectLocation(index: number) {
    setSelectedLocation(index);
    setCompletedSteps(2);
  }

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div>
          <p className="eyebrow">Synthetic interactive demo</p>
          <h3>Distributed field workflow</h3>
        </div>
        <span className="demo-badge">Offline-safe concept</span>
      </div>

      <div className="fieldos-layout">
        <div className="fake-map" aria-label="Synthetic work-area map">
          <div className="map-grid" />
          <div className="map-area area-a" />
          <div className="map-area area-b" />
          <div className="map-road road-a" />
          <div className="map-road road-b" />
          <div className="map-road road-c" />
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
          <aside className="map-workflow-popup" aria-live="polite" key={`${selectedLocation}-${completedSteps}`}>
            <div className="map-popup-topline">
              <span>{mapEvent.eyebrow}</span>
              <i>{completedSteps} / {steps.length}</i>
            </div>
            <strong>{mapEvent.title}</strong>
            <div className="map-popup-detail">
              <span>{mapEvent.label}</span>
              <p>{mapEvent.value}</p>
            </div>
            <div className="map-popup-status"><b />{mapEvent.status}</div>
          </aside>
          <span className="map-label">Demo Work Area 07 · 3 fictional locations</span>
        </div>
        <div className="field-panel">
          <div className="field-address">
            <span>Selected operational location</span>
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
            <p className="demo-note">The demo illustrates a reusable field-to-operations workflow. Production customer data, business rules, capacity rules, pricing, and integrations are intentionally excluded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
