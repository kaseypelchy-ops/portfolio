"use client";

import { useState } from "react";

type Props = { business: string[]; engineering: string[] };

export function PerspectiveToggle({ business, engineering }: Props) {
  const [mode, setMode] = useState<"business" | "engineering">("business");
  const items = mode === "business" ? business : engineering;

  return (
    <section className="perspective-shell">
      <div className="perspective-head">
        <div>
          <p className="eyebrow">Business first · engineering when useful</p>
          <h2>{mode === "business" ? "Business view" : "Engineering view"}</h2>
        </div>
        <div className="segmented" role="group" aria-label="Project perspective">
          <button type="button" className={mode === "business" ? "active" : ""} onClick={() => setMode("business")}>Business</button>
          <button type="button" className={mode === "engineering" ? "active" : ""} onClick={() => setMode("engineering")}>Engineering</button>
        </div>
      </div>
      <div className="perspective-list">
        {items.map((item, index) => (
          <div className="perspective-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
