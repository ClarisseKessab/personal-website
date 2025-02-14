import { useState } from "react";

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
            <a className="link-burgernav" href="/a-propos">À propos</a>
            <a className="link-burgernav" href="/projets">Projets</a>
            <a className="link-burgernav" href="/contact">Contact</a>
            <a className="btn-burger" href="/contact">Me contacter</a>
          </div>

        </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
