import { useEffect } from "react";

function FetchData({ onDataFetched }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        onDataFetched(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [onDataFetched]);

  return null;
}

export default FetchData;
