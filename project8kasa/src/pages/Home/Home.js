import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import BannerHome from "../../assets/BannerHome.png";

function FetchData({ onDataFetched }) {
  // props pour appeler les données après récupération
  useEffect(() => {
    const fetchData = async () => {
      // Fonction asynchrone pour récupérer les données
      try {
        const response = await fetch("/logements.json"); // requête HTTP pour obtenir les données
        const data = await response.json(); // Réponse en format JSON
        onDataFetched(data); // Appel de la fonction onDataFetched avec les données récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData(); // Appel de la fonction fetchData lorsque le composant est monté
  }, []); // Utilisation d'une dépendance vide pour exécuter fetchData uniquement lors du montage
}

function Home() {
  return (
    <div className="Home">
      <Banner image={BannerHome} showText={true} />
      <Cards />
    </div>
  );
}

FetchData.propTypes = {
  onDataFetched: PropTypes.func.isRequired, // onDataFetched = fonction requise
};

export default Home;
export { FetchData };
