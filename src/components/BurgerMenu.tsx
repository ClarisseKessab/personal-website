"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useDarkMode from "../hooks/useDarkMode";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useDarkMode();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isOpen) {
      html.classList.add("no-scroll");
      body.classList.add("no-scroll");
    } else {
      html.classList.remove("no-scroll");
      body.classList.remove("no-scroll");
    }

    return () => {
      html.classList.remove("no-scroll");
      body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className="burger-menu">
      {/* NAV BAR */}
      <div className="burger-top">
        <Link href="/" aria-label="Retour à l'accueil">
        <Image
          src={isDark ? "/logo/logo-dark.png" : "/logo/logo-light.png"}
          alt="Logo"
          width={110}
          height={28}
          className="logo-img"
          />
          </Link>

        <div className="burger-actions">
          <button onClick={toggleTheme} className="btn-toggle-theme">
            {isDark ? "☀️" : "🌙"}
          </button>
          <span onClick={toggleMenu} className="burger-icon">
            <i className="fa-solid fa-bars" />
          </span>
        </div>
      </div>

      {/* MENU OVERLAY */}
      {isOpen && (
        <div className="overlay">
          <div className="close-burgernav" onClick={toggleMenu}>
            <i className="fa-solid fa-x"></i>
          </div>
          <div className="links-burgernav">
            <Link href="/" className="link-burgernav" onClick={closeMenu}>
              Accueil
            </Link>
            <Link href="/projets" className="link-burgernav" onClick={closeMenu}>
              Projets
            </Link>
            {/* <Link href="/blog" className="link-burgernav" onClick={closeMenu}>
              Blog
            </Link> */}
            <Link href="/contact" className="link-burgernav" onClick={closeMenu}>
              Contact
            </Link>
            <Link href="https://calendly.com/clarisse-freelance/appel-decouverte" className="btn btn-primary" onClick={closeMenu}>
              Prendre RDV
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
