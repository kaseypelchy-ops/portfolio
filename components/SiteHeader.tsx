import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="Kasey Pelchy home">
          KP<span className="brand-dot">.</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/projects">Systems</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-cta nav-cta-cwlwm" href="/cwlwm-systems">
          <Image src="/cwlwm-knot.png" alt="" width={514} height={505} aria-hidden="true" />
          <span>Cwlwm Systems</span>
        </Link>
      </div>
    </header>
  );
}
