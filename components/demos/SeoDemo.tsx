"use client";

import { useState } from "react";

type DemoView = "publishing" | "opportunity" | "health" | "ai" | "json";

const marketEvidence = {
  Northfield: {
    impressions: 1240,
    clicks: 18,
    position: 9.8,
    priority: 78,
    health: 96,
    aiSessions: 14,
    citations: 42,
    citedPages: 6,
  },
  Lakeview: {
    impressions: 860,
    clicks: 12,
    position: 13.4,
    priority: 71,
    health: 91,
    aiSessions: 9,
    citations: 27,
    citedPages: 4,
  },
  "Redwood Hills": {
    impressions: 1780,
    clicks: 31,
    position: 7.2,
    priority: 84,
    health: 98,
    aiSessions: 21,
    citations: 56,
    citedPages: 8,
  },
} as const;

function slugify(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

export function SeoDemo() {
  const [market, setMarket] = useState<keyof typeof marketEvidence>("Northfield");
  const [service, setService] = useState("Fiber Internet");
  const [view, setView] = useState<DemoView>("publishing");

  const evidence = marketEvidence[market];
  const ctr = ((evidence.clicks / evidence.impressions) * 100).toFixed(1);
  const query = `${service.toLowerCase()} in ${market.toLowerCase()}`;

  const bundle = {
    title: `${service} in ${market} | Example Broadband`,
    description: `Explore ${service.toLowerCase()} options in ${market}, including availability, service details, and frequently asked questions.`,
    canonical: `https://example.com/${slugify(market)}/${slugify(service)}`,
    answerEngineSummary: `${service} is available to qualifying addresses in ${market}. Address-level availability must be confirmed before ordering.`,
    faq: [
      `Is ${service.toLowerCase()} available in ${market}?`,
      "How do I check serviceability at my address?",
    ],
  };

  const intelligence = {
    query,
    measurementStatus: "measured",
    searchConsole: {
      impressions: evidence.impressions,
      clicks: evidence.clicks,
      ctr: `${ctr}%`,
      averagePosition: evidence.position,
    },
    ownership: {
      state: "intended_owner",
      confidence: 0.93,
    },
    priority: {
      score: evidence.priority,
      tier: "high",
      action: "strengthen_intended_owner",
    },
    siteHealth: {
      score: evidence.health,
      canonical: "valid",
      structuredData: "valid",
      openIssues: evidence.health < 95 ? 2 : 0,
    },
    aiVisibility: {
      referrals: evidence.aiSessions,
      citations: evidence.citations,
      citedPages: evidence.citedPages,
      sourceSemanticsPreserved: true,
    },
  };

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div>
          <p className="eyebrow">Synthetic interactive demo</p>
          <h3>Search operations command center</h3>
        </div>
        <div className="inline-controls">
          <label>
            Market
            <select
              value={market}
              onChange={(event) =>
                setMarket(event.target.value as keyof typeof marketEvidence)
              }
            >
              <option>Northfield</option>
              <option>Lakeview</option>
              <option>Redwood Hills</option>
            </select>
          </label>
          <label>
            Service
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              <option>Fiber Internet</option>
              <option>Business Internet</option>
              <option>Managed Wi-Fi</option>
            </select>
          </label>
        </div>
      </div>

      <div className="segmented small seo-view-tabs" aria-label="Demo view">
        {(
          [
            ["publishing", "Publishing"],
            ["opportunity", "Opportunity"],
            ["health", "Site health"],
            ["ai", "AI visibility"],
            ["json", "Evidence JSON"],
          ] as const
        ).map(([value, label]) => (
          <button
            type="button"
            className={view === value ? "active" : ""}
            aria-pressed={view === value}
            onClick={() => setView(value)}
            key={value}
          >
            {label}
          </button>
        ))}
      </div>

      {view === "publishing" ? (
        <div className="render-preview">
          <span className="preview-url">{bundle.canonical}</span>
          <h4>{bundle.title}</h4>
          <p>{bundle.description}</p>
          <div className="faq-preview">
            {bundle.faq.map((item) => (
              <div key={item}>+ {item}</div>
            ))}
          </div>
        </div>
      ) : null}

      {view === "opportunity" ? (
        <div>
          <div className="metric-grid">
            <div className="metric"><span>Impressions</span><strong>{evidence.impressions.toLocaleString()}</strong></div>
            <div className="metric"><span>Clicks / CTR</span><strong>{evidence.clicks} / {ctr}%</strong></div>
            <div className="metric"><span>Average position</span><strong>{evidence.position}</strong></div>
            <div className="metric"><span>Priority score</span><strong>{evidence.priority}</strong></div>
          </div>
          <div className="score-track" aria-label={`Priority score ${evidence.priority} out of 100`}>
            <div style={{ width: `${evidence.priority}%` }} />
          </div>
          <div className="demo-decision">
            <div>
              <span className="status-dot" />
              <strong>Strengthen the intended owner</strong>
              <p>The correct page already ranks. Improve content fit instead of creating a competing page.</p>
            </div>
            <span className="demo-badge">Ownership confidence 93%</span>
          </div>
        </div>
      ) : null}

      {view === "health" ? (
        <div>
          <div className="metric-grid">
            <div className="metric"><span>Health score</span><strong>{evidence.health}</strong></div>
            <div className="metric"><span>Canonical</span><strong>Valid</strong></div>
            <div className="metric"><span>Structured data</span><strong>Valid</strong></div>
            <div className="metric"><span>Open issues</span><strong>{evidence.health < 95 ? 2 : 0}</strong></div>
          </div>
          <div className="demo-result">
            <strong><span className="status-dot" />Rendered-page audit complete</strong>
            <span>Template family: Local service page</span>
            <span>Measurement state: Current</span>
          </div>
        </div>
      ) : null}

      {view === "ai" ? (
        <div>
          <div className="metric-grid">
            <div className="metric"><span>Identifiable AI referrals</span><strong>{evidence.aiSessions}</strong></div>
            <div className="metric"><span>Bing AI citations</span><strong>{evidence.citations}</strong></div>
            <div className="metric"><span>Cited pages</span><strong>{evidence.citedPages}</strong></div>
            <div className="metric"><span>Measurement coverage</span><strong>Measured</strong></div>
          </div>
          <div className="demo-result">
            <strong><span className="status-dot" />Sources measured independently</strong>
            <span>Readiness ≠ referrals ≠ citations</span>
            <span>Zero remains distinct from unknown</span>
          </div>
          <p className="demo-note">Synthetic values demonstrate the measurement model. They do not represent production performance.</p>
        </div>
      ) : null}

      {view === "json" ? (
        <pre className="code-preview">{JSON.stringify({ bundle, intelligence, synthetic: true }, null, 2)}</pre>
      ) : null}
    </div>
  );
}
