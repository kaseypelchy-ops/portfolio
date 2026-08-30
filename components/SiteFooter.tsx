import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-mark">KASEY PELCHY</div>
          <p>Business systems, operational software, data, automation, AI, growth technology, and revenue operations.</p>
        </div>
        <div className="footer-links">
          <Link href="/cwlwm-systems" className="footer-cwlwm-link">
            <Image src="/cwlwm-knot.png" alt="" width={514} height={505} aria-hidden="true" />
            <span>Cwlwm Systems</span>
          </Link>
          <a href="mailto:cwlwmsystems@gmail.com">Email ↗</a>
          <a href="https://github.com/kaseypelchy-ops" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kaseypelchy19/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}
