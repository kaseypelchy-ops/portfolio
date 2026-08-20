"use client";

import { useMemo, useState } from "react";

export function SeoDemo() {
  const [market, setMarket] = useState("Northfield");
  const [service, setService] = useState("Fiber Internet");
  const [view, setView] = useState<"page" | "json">("page");

  const bundle = useMemo(() => ({
    title: `${service} in ${market} | Example Broadband`,
    description: `Explore ${service.toLowerCase()} options in ${market}, including availability, service details, and frequently asked questions.`,
    canonical: `https://example.com/${market.toLowerCase().replaceAll(" ", "-")}/${service.toLowerCase().replaceAll(" ", "-")}`,
    faq: [
      `Is ${service.toLowerCase()} available in ${market}?`,
      "How do I check serviceability at my address?"
    ]
  }), [market, service]);

  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <div>
          <p className="eyebrow">Synthetic interactive demo</p>
          <h3>Structured content renderer</h3>
        </div>
        <div className="inline-controls">
          <label>Market
            <select value={market} onChange={(e) => setMarket(e.target.value)}>
              <option>Northfield</option><option>Lakeview</option><option>Redwood Hills</option>
            </select>
          </label>
          <label>Service
            <select value={service} onChange={(e) => setService(e.target.value)}>
              <option>Fiber Internet</option><option>Business Internet</option><option>Managed Wi-Fi</option>
            </select>
          </label>
        </div>
      </div>

      <div className="segmented small">
        <button type="button" className={view === "page" ? "active" : ""} onClick={() => setView("page")}>Rendered</button>
        <button type="button" className={view === "json" ? "active" : ""} onClick={() => setView("json")}>JSON bundle</button>
      </div>

      {view === "page" ? (
        <div className="render-preview">
          <span className="preview-url">{bundle.canonical}</span>
          <h4>{bundle.title}</h4>
          <p>{bundle.description}</p>
          <div className="faq-preview">{bundle.faq.map((item) => <div key={item}>+ {item}</div>)}</div>
        </div>
      ) : <pre className="code-preview">{JSON.stringify(bundle, null, 2)}</pre>}
    </div>
  );
}
