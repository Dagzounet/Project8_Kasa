import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Housing from "../../pages/Housing/Housing";
import NotFound from "../../pages/NotFound/NotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Routeur() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/housing/:id" element={<Housing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Routeur;
