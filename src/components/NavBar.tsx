/* eslint-disable @next/next/no-html-link-for-pages */
// components/NavBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../components/BurgerMenu";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile }) => {
  const pathname = usePathname();

  console.log("isMobile in Navbar:", isMobile);

  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
        <Image src="/assets/Logo.png" alt="Logo" className="logo-img" width={110} height={28.19} layout="intrinsic" />
        </a>
      </div>

      {isMobile ? (
        <BurgerMenu />
      ) : (
        <>
        <div className="links-nav">
          <Link href="/" className={pathname === "/" ? "link-active" : "link-p"}>Accueil</Link>
          {/* <Link href="/a-propos" className={pathname === "/a-propos" ? "link-active" : "link-p"}>À propos</Link> */}
          <Link href="/projets" className={pathname === "/projets" ? "link-active" : "link-p"}>Projets</Link>
          <Link href="/contact" className={pathname === "/contact" ? "link-active" : "link-p"}>Contact</Link>
        </div>
        <div>
        <a href="" className="btn btn-primary">Me contacter</a>
      </div>
      </>
      )}

    </nav>
  );
};

export default Navbar;
