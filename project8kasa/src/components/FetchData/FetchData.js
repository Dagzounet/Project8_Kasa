import { useEffect } from "react";

function FetchData({ onDataFetched }) {
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

    fetchData();
  }, [onDataFetched]); // Appel de la fonction fetchData lorsque le composant est monté

  return null; // pour indiquer qu'il n'y a pas de rendu immédiat (conventionnel)
}

export default FetchData;
