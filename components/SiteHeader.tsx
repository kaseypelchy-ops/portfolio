import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="Kasey Pelchy home">
          KP<span className="brand-dot">.</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-cta" href="/cwlwm-systems">Cwlwm Systems</Link>
      </div>
    </header>
  );
}
