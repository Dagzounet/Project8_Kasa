import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Housing() {
  return (
    <div>
      <div className="app-container">
        <Header />
        <main>
          <h2>Cozy loft on the Canal Saint-Martin</h2>
          <p>Paris, Île-de-France</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Housing;
