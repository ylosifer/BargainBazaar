import React, { useEffect, useState } from "react";
import LazyCard from "./LazyCard";
import axios from "axios";
import "./css/CardGrid.css";

const CardGrid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("https://a1222dc1-f638-4973-a91d-f420f75df50b-00-vzgbpa3nwwot.picard.replit.dev/ads");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <LazyCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardGrid;
