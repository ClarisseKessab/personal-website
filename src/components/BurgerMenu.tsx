import { useState } from "react";
import Link from 'next/link';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <span onClick={toggleMenu} style={{ cursor: "pointer" }}>
      <i className="fa-solid fa-bars"></i>
      </span>

      {isOpen && (
        <>
        <div className="overlay">
        <div className="close-burgernav"onClick={toggleMenu}><i className="fa-solid fa-x"></i></div>
          <div className="links-burgernav">
            <Link className="link-burgernav" href="/a-propos">À propos</Link>
            <Link className="link-burgernav" href="/projets">Projets</Link>
            <Link className="link-burgernav" href="/contact">Contact</Link>
            <Link className="btn-burger" href="/contact">Me contacter</Link>
          </div>

        </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
