import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Systems & Case Studies",
  description: "Cross-industry case studies covering field operations, decision intelligence, AI quality assurance, geospatial data, and search visibility."
};

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">Systems & case studies</p>
          <h1>Business problems. Reusable system patterns. Real technical execution.</h1>
          <p>Each case study is intentionally framed around the business problem it solves rather than the industry where it was first built. The named implementation provides proof; the generalized pattern shows how the same architecture could support other organizations.</p>
        </div>
        <div className="portfolio-reading-grid">
          <article><span>01</span><h2>Start with the problem</h2><p>See the operational friction, decision, or workflow the system is designed to improve.</p></article>
          <article><span>02</span><h2>See the reusable pattern</h2><p>Understand how the same system model can translate to other industries, teams, and use cases.</p></article>
          <article><span>03</span><h2>Go technical when useful</h2><p>Open the engineering view, interactive reconstruction, stack, or GitHub showcase for implementation depth.</p></article>
        </div>
        <div className="project-grid wide">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
      </div>
    </section>
  );
}
