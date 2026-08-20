"use client";

import { useMemo, useState } from "react";

const markets = {
  "Harbor Ridge": { trend: -8.4, net: -31, churn: 62, completeness: 94, score: 78, eligible: true },
  "Mesa Vista": { trend: -3.1, net: -8, churn: 41, completeness: 88, score: 52, eligible: true },
  "Pine Valley": { trend: -6.8, net: -20, churn: 57, completeness: 61, score: 69, eligible: false }
};

type MarketName = keyof typeof markets;

export function MarketRecoveryDemo() {
  const [name, setName] = useState<MarketName>("Harbor Ridge");
  const [started, setStarted] = useState(false);
  const market = markets[name];

  const status = useMemo(() => {
    if (!market.eligible) return "Hold — evidence incomplete";
    if (market.score >= 70) return "Recommended for investigation";
    return "Eligible candidate";
  }, [market]);

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div>
          <p className="eyebrow">Synthetic interactive demo</p>
          <h3>Market investigation</h3>
        </div>
        <label>
          Fictional market
          <select value={name} onChange={(e) => { setName(e.target.value as MarketName); setStarted(false); }}>
            {Object.keys(markets).map((marketName) => <option key={marketName}>{marketName}</option>)}
          </select>
        </label>
      </div>

      <div className="metric-grid">
        <div className="metric"><span>52-week trend</span><strong>{market.trend}%</strong></div>
        <div className="metric"><span>30-day net adds</span><strong>{market.net}</strong></div>
        <div className="metric"><span>Churn pressure</span><strong>{market.churn}/100</strong></div>
        <div className="metric"><span>Completeness</span><strong>{market.completeness}%</strong></div>
      </div>

      <div className="score-track" aria-label={`Recovery score ${market.score} out of 100`}>
        <div style={{ width: `${market.score}%` }} />
      </div>

      <div className="demo-decision">
        <div>
          <span className={`status-dot ${market.eligible ? "ok" : "hold"}`} />
          <strong>{status}</strong>
          <p>Severity and actionability are evaluated separately.</p>
        </div>
        <button type="button" disabled={!market.eligible || started} onClick={() => setStarted(true)}>
          {started ? "Baseline frozen ✓" : "Start recovery project"}
        </button>
      </div>

      {started && (
        <div className="demo-result">
          <strong>Project created in demo state.</strong>
          <span>Baseline snapshot: score {market.score}, completeness {market.completeness}%.</span>
        </div>
      )}
    </div>
  );
}
