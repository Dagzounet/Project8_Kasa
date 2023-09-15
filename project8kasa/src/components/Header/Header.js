import React from "react";
import logo from "../../assets/LOGO.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="le logo de kasa" />
      <a href="/" alt="Accueil">
        Accueil
      </a>
      <a href="/about" alt="A propos">
        A Propos
      </a>
    </header>
  );
}

export default Header;
