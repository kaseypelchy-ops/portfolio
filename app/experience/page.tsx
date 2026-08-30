import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "A cross-functional view of Kasey Pelchy's experience in business operations, marketing, systems, data, automation, and software."
};

const lanes = [
  { title: "Business & Operations", items: ["Process design", "Customer acquisition", "Field operations", "Campaign execution", "Cross-functional workflow design", "Reporting and decision support"] },
  { title: "Software & Systems", items: ["Full-stack internal applications", "Transactional workflows", "Role-based operational tools", "Realtime and offline-safe patterns", "API integration", "Deployment and regression validation"] },
  { title: "Data, Automation & Growth", items: ["PostgreSQL / Supabase", "Data modeling", "ETL and normalization", "Scoring and ranking systems", "Geospatial processing", "AI-assisted workflows", "Search and lifecycle systems"] }
];

export default function ExperiencePage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">Experience</p>
          <h1>Cross-functional by design.</h1>
          <p>I am most useful when a business problem crosses organizational boundaries: where a better outcome depends on process design, trustworthy data, software, automation, and a clear understanding of the people doing the work.</p>
        </div>

        <div className="experience-grid">
          {lanes.map((lane, index) => (
            <article key={lane.title}>
              <span>0{index + 1}</span>
              <h2>{lane.title}</h2>
              <ul>{lane.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="role-callout">
          <p className="eyebrow">How the portfolio is positioned</p>
          <h2>The system is more important than the industry where it was first built.</h2>
          <p>Each case study starts with the reusable business pattern — field coordination, performance intelligence, AI quality operations, location intelligence, or search visibility — and then shows the real implementation as proof. That makes the work easier to evaluate for employers and organizations outside the original business context.</p>
        </div>
      </div>
    </section>
  );
}
