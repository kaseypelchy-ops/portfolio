import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Interactive case studies spanning decision support, field operations, AI, geospatial data, and SEO/AEO."
};

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">Project portfolio</p>
          <h1>Real problems. Purpose-built systems.</h1>
          <p>Each case study uses synthetic data and generalized public-safe examples. The interactive demos are reconstructions designed to communicate the workflow and engineering approach without exposing private systems.</p>
        </div>
        <div className="project-grid wide">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
      </div>
    </section>
  );
}
