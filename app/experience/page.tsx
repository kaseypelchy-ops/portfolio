import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "A cross-functional view of Kasey Pelchy's experience in marketing, operations, systems, data, and software."
};

const lanes = [
  { title: "Marketing & Operations", items: ["Marketing strategy", "Customer acquisition", "Field-sales operations", "Campaign execution", "Cross-functional process design", "Reporting and decision support"] },
  { title: "Software & Systems", items: ["Full-stack internal applications", "Transactional workflows", "Role-based operational tools", "Realtime and offline-safe patterns", "API integration", "Deployment and regression validation"] },
  { title: "Data & Automation", items: ["PostgreSQL / Supabase", "Data modeling", "ETL and normalization", "Scoring and ranking systems", "Geospatial processing", "AI-assisted workflows"] }
];

export default function ExperiencePage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">Experience</p>
          <h1>Cross-functional by design.</h1>
          <p>I am most useful in work that crosses organizational boundaries: where a business problem depends on better process design, better data, and a system that makes the two usable together.</p>
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
          <p className="eyebrow">Current positioning</p>
          <h2>Marketing Manager building systems across marketing technology, software, data, automation, AI, and operations.</h2>
          <p>The portfolio is organized around the systems themselves because they best demonstrate how I think: define the problem, model the workflow, build the technical layer, and connect the result back to the decision.</p>
        </div>
      </div>
    </section>
  );
}
