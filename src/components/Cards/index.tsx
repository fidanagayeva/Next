import React from "react";

interface CardProps {
  title: string;
  image: string;
  price: string;
}

export default function Card({ title, image, price }: CardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col justify-between h-full">
      <img src={image} alt={title} className="rounded-md mb-4" />
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-green-400">{price}</p>
      </div>
    </div>
  );
}
