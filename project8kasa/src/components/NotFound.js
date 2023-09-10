import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function NotFound() {
  return (
    <div>
      <div className="app-container">
        <Header />
        <main>
          <h2>404</h2>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">Retourner sur la page d'accueil.</a>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
