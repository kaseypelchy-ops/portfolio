import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kasey Pelchy and connect through Cwlwm Systems, GitHub, or LinkedIn."
};

export default function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro">
            <div className="contact-profile-lockup">
              <div className="contact-portrait">
                <Image
                  src="/kasey-pelchy-profile.webp"
                  alt="Portrait of Kasey Pelchy"
                  width={1000}
                  height={1200}
                  priority
                />
              </div>
              <div className="contact-profile-copy">
                <span>Profile</span>
                <strong>Kasey Pelchy</strong>
                <p>Systems builder · Founder, Cwlwm Systems</p>
              </div>
            </div>

            <p className="eyebrow">Contact</p>
            <h1>See a system pattern that could fit your business?</h1>
            <p>The case studies are intentionally generalized so you can evaluate the business pattern first, then go deeper into the technical implementation. For custom operational software, automation, AI, data, or growth systems, Cwlwm Systems is the business-facing path.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:cwlwmsystems@gmail.com"><span>Email</span><strong>cwlwmsystems@gmail.com ↗</strong></a>
            <a href="https://cwlwmsystems.vercel.app" target="_blank" rel="noreferrer" className="contact-cwlwm-link">
              <span>Business</span>
              <strong><Image src="/cwlwm-knot.png" alt="" width={514} height={505} aria-hidden="true" /> Visit Cwlwm Systems ↗</strong>
            </a>
            <a href="https://github.com/kaseypelchy-ops" target="_blank" rel="noreferrer"><span>GitHub</span><strong>Technical showcases ↗</strong></a>
            <a href="https://www.linkedin.com/in/kaseypelchy19/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Professional profile ↗</strong></a>
            <div className="contact-detail"><span>Location</span><strong>Pennsylvania, United States</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
