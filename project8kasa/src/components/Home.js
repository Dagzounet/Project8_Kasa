import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="app-container">
        <Header />
        <main>
          <h2>Page d'accueil</h2>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;