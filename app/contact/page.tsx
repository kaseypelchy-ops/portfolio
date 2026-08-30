import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kasey Pelchy and connect through Cwlwm Systems, GitHub, or LinkedIn."
};

export default function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="container">
        <div className="contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Interested in the systems behind the work?</h1>
            <p>The public portfolio is intentionally sanitized, but the case studies show the architecture, engineering patterns, and problem-solving approach behind the projects.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:cwlwmsystems@gmail.com"><span>Email</span><strong>cwlwmsystems@gmail.com ↗</strong></a>
            <a href="/cwlwm-systems"><span>Business</span><strong>Cwlwm Systems →</strong></a>
            <a href="https://github.com/kaseypelchy-ops" target="_blank" rel="noreferrer"><span>GitHub</span><strong>Technical showcases ↗</strong></a>
            <a href="https://www.linkedin.com/in/kaseypelchy19/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Professional profile ↗</strong></a>
            <div className="contact-detail"><span>Location</span><strong>Pennsylvania, United States</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
