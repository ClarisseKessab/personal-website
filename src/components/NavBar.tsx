"use client";

import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../components/BurgerMenu";
import { usePathname } from "next/navigation";
import useDarkMode from "../hooks/useDarkMode";

interface NavbarProps {
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile }) => {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <nav className="nav">
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <div className="nav-inner">
          <div className="logo">
            <Link href="/" aria-label="Retour à l'accueil">
              <Image
                src={isDark ? "/logo/logo-dark.png" : "/logo/logo-light.png"}
                alt="Logo Clarisse"
                width={110}
                height={28}
                className="logo-img"
                priority
              />
            </Link>
          </div>

          <div className="links-nav">
            <Link href="/" className={pathname === "/" ? "link-active" : "link-p"}>Accueil</Link>
            <Link href="/projets" className={pathname === "/projets" ? "link-active" : "link-p"}>Projets</Link>
            <Link href="/contact" className={pathname === "/contact" ? "link-active" : "link-p"}>Contact</Link>
          </div>

          <div className="nav-actions">
            <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://calendly.com/clarisse-freelance/appel-decouverte">Prendre RDV</a>
            <button onClick={toggleTheme} className="btn-toggle-theme" aria-label="Changer de thème">
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
