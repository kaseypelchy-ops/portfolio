import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Systems & Case Studies",
  description: "Engineering showcases alongside recent HubSpot implementation and independently developed business applications."
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
      <section className="recent-projects">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Recent work</p>
            <h2>CRM implementation and business applications.</h2>
            <p>Alongside the engineering case studies, my newer work includes HubSpot onboarding and configuration, cross-system automation, and independent client-facing websites and applications.</p>
          </div>
          <div className="capability-grid">
            <article><span>01</span><h3>HubSpot &amp; RevOps delivery</h3><p>Guided onboarding, sales-process mapping, CRM properties and pipelines, record layouts, workflow troubleshooting, migration planning, and integration support. Client configurations are not published.</p></article>
            <article><span>02</span><h3>Automotive storefront &amp; inventory</h3><p>Next.js storefront architecture with vehicle-fitment data, SKU and supplier records, database migrations, CSV imports, and a protected staff workspace. <a href="https://github.com/kaseypelchy-ops/olson-tenglund" target="_blank" rel="noreferrer">View repository ↗</a></p></article>
            <article><span>03</span><h3>Regional business website</h3><p>A responsive informational site for Olson &amp; Tenglund across three Pennsylvania store locations, supported by local-search and business-presence work. <a href="https://github.com/kaseypelchy-ops/olson-tenglund-info" target="_blank" rel="noreferrer">View repository ↗</a></p></article>
            <article><span>04</span><h3>Independent client projects</h3><p>Web and operational systems through Cwlwm Systems, including community-oriented work and an active church-website codebase. <a href="https://github.com/kaseypelchy-ops/church-website" target="_blank" rel="noreferrer">Church repo ↗</a></p></article>
          </div>
        </div>
      </section>


      </div>
    </section>
  );
}
