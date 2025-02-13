"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="logo">
        <img src="/assets/Logo.png" alt="Logo" className="logo-img"/>
      </div>
      <div className="links-nav">
        <Link href="/" className={pathname === "/" ? "link-active" : "link-p"}>Accueil</Link>
        <Link href="/a-propos" className={pathname === "/a-propos" ? "link-active" : "link-p"}>À propos</Link>
        <Link href="/projets" className={pathname === "/projets" ? "link-active" : "link-p"}>Projets</Link>
        <Link href="/contact" className={pathname === "/contact" ? "link-active" : "link-p"}>Contact</Link>
      </div>
      <div>
        <a href="" className="btn btn-primary">Me contacter</a>
      </div>
    </nav>
  );
}
