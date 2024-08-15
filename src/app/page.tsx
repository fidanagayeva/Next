"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Cards/index";

interface CardData {
  id: number;
  title: string;
  image: string;
  price: string;
}

export default function Home() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("/api/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Spotlight. Collection you'll love</h2>
      <div className="grid grid-cols-4 gap-6">
        {cards.slice(0, 4).map((card) => (
          <Card key={card.id} title={card.title} image={card.image} price={card.price} />
        ))}
      </div>

      <div className="mt-16 p-8 bg-black rounded-lg flex items-start justify-between">
        <div className="mr-8">
          <h2 className="text-4xl font-bold mb-4">Most Popular Artworks</h2>
          <p className="text-gray-400 mb-8">
            Our marketplace has 2M+ works of popular artists around the world.
          </p>
          <button className="bg-black text-white border-2 border-white px-6 py-3 rounded-full">
            View All NFTs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cards.slice(4).map((card) => (
            <Card key={card.id} title={card.title} image={card.image} price={card.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
