"use client";

import { useMemo, useState } from "react";

const regions = {
  "Harbor Ridge": { trend: -8.4, net: -31, attrition: 62, completeness: 94, score: 78, eligible: true },
  "Mesa Vista": { trend: -3.1, net: -8, attrition: 41, completeness: 88, score: 52, eligible: true },
  "Pine Valley": { trend: -6.8, net: -20, attrition: 57, completeness: 61, score: 69, eligible: false }
};

type RegionName = keyof typeof regions;

export function MarketRecoveryDemo() {
  const [name, setName] = useState<RegionName>("Harbor Ridge");
  const [started, setStarted] = useState(false);
  const region = regions[name];

  const status = useMemo(() => {
    if (!region.eligible) return "Hold — evidence incomplete";
    if (region.score >= 70) return "Recommended for investigation";
    return "Eligible candidate";
  }, [region]);

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div>
          <p className="eyebrow">Synthetic interactive demo</p>
          <h3>Performance investigation</h3>
        </div>
        <label>
          Fictional operating region
          <select value={name} onChange={(e) => { setName(e.target.value as RegionName); setStarted(false); }}>
            {Object.keys(regions).map((regionName) => <option key={regionName}>{regionName}</option>)}
          </select>
        </label>
      </div>

      <div className="metric-grid">
        <div className="metric"><span>52-week performance trend</span><strong>{region.trend}%</strong></div>
        <div className="metric"><span>30-day net change</span><strong>{region.net}</strong></div>
        <div className="metric"><span>Attrition pressure</span><strong>{region.attrition}/100</strong></div>
        <div className="metric"><span>Evidence completeness</span><strong>{region.completeness}%</strong></div>
      </div>

      <div className="score-track" aria-label={`Priority score ${region.score} out of 100`}>
        <div style={{ width: `${region.score}%` }} />
      </div>

      <div className="demo-decision">
        <div>
          <span className={`status-dot ${region.eligible ? "ok" : "hold"}`} />
          <strong>{status}</strong>
          <p>Performance severity and operational actionability are evaluated separately.</p>
        </div>
        <button type="button" disabled={!region.eligible || started} onClick={() => setStarted(true)}>
          {started ? "Baseline frozen ✓" : "Start improvement project"}
        </button>
      </div>

      {started && (
        <div className="demo-result">
          <strong>Project created in demo state.</strong>
          <span>Baseline snapshot: score {region.score}, completeness {region.completeness}%.</span>
        </div>
      )}
    </div>
  );
}
