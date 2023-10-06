import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/LOGO.png";

function Header() {
  const location = useLocation(); //utilisation de ce hooks pour obtenir les info de l'url actuelle
  return (
    <header>
      <img src={logo} alt="le logo de kasa" />
      <a
        href="/"
        alt="Accueil"
        className={location.pathname === "/" ? "underline" : ""}
      >
        Accueil
      </a>
      <a
        href="/about"
        alt="A propos"
        className={location.pathname === "/about" ? "underline" : ""}
      >
        A Propos
      </a>
    </header>
  );
}

export default Header;
