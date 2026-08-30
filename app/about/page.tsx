import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "How Kasey Pelchy approaches business problems, systems, software, data, and automation."
};

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">About</p>
          <h1>I start with the business pattern, not the technology or industry.</h1>
          <p>My background is rooted in marketing and operations, but much of my work now sits inside software, data, automation, AI, and revenue systems. The common thread is identifying a recurring operational problem and building a system that makes the work clearer, more reliable, and more measurable.</p>
        </div>

        <div className="about-grid">
          <article className="about-card"><span>01</span><h2>Map the real workflow</h2><p>I identify who is doing the work, what decisions they make, what information they need, and where the current process breaks between people or tools.</p></article>
          <article className="about-card"><span>02</span><h2>Find the reusable pattern</h2><p>I separate the underlying problem from company-specific language so the architecture solves a durable workflow rather than one narrow screen or request.</p></article>
          <article className="about-card"><span>03</span><h2>Model the data and rules</h2><p>I define entities, state transitions, relationships, evidence, business rules, ownership, and failure boundaries before the interface dictates the architecture.</p></article>
          <article className="about-card"><span>04</span><h2>Build the smallest reliable system</h2><p>Sometimes that is a full application. Sometimes it is a data pipeline, database workflow, API integration, automation, AI layer, or decision-support model.</p></article>
          <article className="about-card"><span>05</span><h2>Validate against reality</h2><p>I care about retries, weak networks, duplicated inputs, missing data, changing requirements, adoption, and whether the output actually helps someone make a better decision.</p></article>
          <article className="about-card"><span>06</span><h2>Design for the next use case</h2><p>When possible, I keep configuration, rules, data models, and interfaces flexible enough that the same pattern can support another team, market, workflow, or business.</p></article>
        </div>

        <div className="principles">
          <p className="eyebrow">Engineering principles</p>
          <div className="principle-row"><strong>Preserve clear sources of truth.</strong><span>Shared logic should not drift across screens, teams, or services.</span></div>
          <div className="principle-row"><strong>Separate evidence from decisions.</strong><span>Raw data, analytical interpretation, and operational policy are different concerns.</span></div>
          <div className="principle-row"><strong>Treat missing data explicitly.</strong><span>Unknown should not silently become healthy, successful, or false certainty.</span></div>
          <div className="principle-row"><strong>Design for failure and retries.</strong><span>Imports repeat, workers fail, users retry, and networks drop.</span></div>
          <div className="principle-row"><strong>Preserve history.</strong><span>Changing today&apos;s configuration should not rewrite yesterday&apos;s decision.</span></div>
          <div className="principle-row"><strong>Prefer configurable patterns over one-off logic.</strong><span>Reusable rules make a system more valuable when the next workflow looks similar but not identical.</span></div>
        </div>
      </div>
    </section>
  );
}
