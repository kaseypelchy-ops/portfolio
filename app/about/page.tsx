import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "How Kasey Pelchy approaches business problems, software, data, and automation."
};

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">About</p>
          <h1>I start with the process, not the technology.</h1>
          <p>My background is rooted in marketing and operations, but much of my work now sits inside software, data, automation, and AI. The common thread is solving operational problems with systems that are understandable, repeatable, and useful.</p>
        </div>

        <div className="about-grid">
          <article className="about-card"><span>01</span><h2>Map the workflow</h2><p>I identify who is doing the work, what decisions they make, what information they need, and where the process currently breaks down.</p></article>
          <article className="about-card"><span>02</span><h2>Model the data</h2><p>I define the entities, state transitions, relationships, evidence, business rules, and boundaries before the interface dictates the architecture.</p></article>
          <article className="about-card"><span>03</span><h2>Build the smallest reliable system</h2><p>Sometimes that is a full application. Sometimes it is a data pipeline, database workflow, API integration, automation, or analytical layer.</p></article>
          <article className="about-card"><span>04</span><h2>Validate against reality</h2><p>I care about retries, weak networks, duplicated inputs, missing data, changing requirements, and whether the output actually helps someone make a decision.</p></article>
        </div>

        <div className="principles">
          <p className="eyebrow">Engineering principles</p>
          <div className="principle-row"><strong>Preserve clear sources of truth.</strong><span>Shared logic should not drift across screens or services.</span></div>
          <div className="principle-row"><strong>Separate evidence from decisions.</strong><span>Raw data, analytical interpretation, and operational policy are different concerns.</span></div>
          <div className="principle-row"><strong>Treat missing data explicitly.</strong><span>Unknown should not silently become healthy, successful, or false certainty.</span></div>
          <div className="principle-row"><strong>Design for failure and retries.</strong><span>Imports repeat, workers fail, users retry, and networks drop.</span></div>
          <div className="principle-row"><strong>Preserve history.</strong><span>Changing today&apos;s configuration should not rewrite yesterday&apos;s decision.</span></div>
        </div>
      </div>
    </section>
  );
}
