"use client";

import { useState } from "react";

const labels = ["Parse geometry", "Apply bounding box", "Point-in-polygon", "Normalize output"];

export function FiberDemo() {
  const [step, setStep] = useState(0);
  const points = [[18,22],[28,35],[39,29],[50,51],[61,33],[72,58],[82,25],[45,68],[30,72]];
  const inside = ([x, y]: number[]) => x > 27 && x < 73 && y > 25 && y < 69;

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div><p className="eyebrow">Synthetic geometry demo</p><h3>Operational-area matching pipeline</h3></div>
        <button type="button" onClick={() => setStep((value) => (value + 1) % (labels.length + 1))}>
          {step >= labels.length ? "Reset demo" : labels[step]}
        </button>
      </div>

      <div className="spatial-demo">
        <svg viewBox="0 0 100 80" role="img" aria-label="Synthetic operating-area polygon and candidate points">
          <rect x="1" y="1" width="98" height="78" rx="3" className="svg-bg" />
          {step >= 1 && <rect x="22" y="18" width="58" height="58" className="bbox" />}
          <polygon points="28,28 58,20 76,40 67,68 37,70 22,48" className="service-poly" />
          {points.map((point, index) => {
            const match = inside(point);
            const hidden = step >= 2 && !match;
            return <circle key={index} cx={point[0]} cy={point[1]} r="2.4" className={`${step >= 3 && match ? "matched" : "candidate"} ${hidden ? "muted-point" : ""}`} />;
          })}
        </svg>
        <div className="spatial-copy">
          <strong>{step === 0 ? "Raw operating geometry" : step === 1 ? "Candidate universe reduced" : step === 2 ? "Exact spatial match" : step === 3 ? "Matched locations highlighted" : "Ready to normalize"}</strong>
          <p>{step < 2 ? "The visualization shows how inexpensive spatial filtering can reduce the amount of expensive exact matching required." : "Only fictional candidate locations inside the synthetic operating boundary remain relevant."}</p>
          {step >= 3 && <pre className="mini-code">{`location_id,match_status\nDEMO-001,matched\nDEMO-004,matched\nDEMO-006,matched`}</pre>}
        </div>
      </div>
    </div>
  );
}
