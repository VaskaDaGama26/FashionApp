import React, { useState } from "react";
import Heading from "./UI/Heading";
import Card from "./UI/Card";

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("colors");
  const specsColors = [
    {
      label: "Orange Suit (M)",
      collection: "Fashion Colors",
      price: "9.990",
      img: "/cards/colors/ColorsOrange1.jpg",
    },
    {
      label: "Red Suit (W)",
      collection: "Fashion Colors",
      price: "13.990",
      img: "/cards/colors/ColorsRed1.jpg",
    },
    {
      label: "BLUE/ORANGE (W)",
      collection: "Fashion Colors",
      price: "24.990",
      img: "/cards/colors/ColorsBlue1.jpg",
    },
  ];
  const specsGarden = [
    {
      label: "GARDEN/BLACK (M)",
      collection: "FASHION NATURE",
      price: "5.990",
      img: "/cards/garden/GardenBlack1.jpg",
    },
    {
      label: "BLACK/WHITE (M)",
      collection: "FASHION NATURE",
      price: "11.990",
      img: "/cards/garden/GardenWhite1.jpg",
    },
    {
      label: "RED&BLACK/WHITE (M)",
      collection: "FASHION NATURE",
      price: "48.990",
      img: "/cards/garden/GardenRed1.jpg",
    },
  ];
  const renderCards = () => {
    const cards = activeCategory === "colors" ? specsColors : specsGarden;
    return (
      <div className="flex px-2.5 xl:px-0 flex-col lg:flex-row gap-8 lg:gap-0 justify-between w-full max-w-7xl mx-auto mb-24">
        {cards.map((card, index) => (
          <Card key={index} specs={card} />
        ))}
      </div>
    );
  };

  return (
    <div id="catalog" className="flex flex-col gap-8 max-w-7xl mx-auto">
      <Heading label="Каталог" />
      <div className="flex flex-row gap-6">
        <button className={`text-base/tight px-4 py-2 cursor-pointer rounded-xl font-normal shadow-md uppercase ${activeCategory === "colors" ? "bg-(--coral) text-neutral-950" : "bg-neutral-50 text-(--gray)"} `} onClick={() => setActiveCategory("colors")}>Colors</button>
        <button className={`text-base/tight px-4 py-2 cursor-pointer rounded-xl font-normal shadow-md uppercase ${activeCategory === "garden" ? "bg-(--coral) text-neutral-950" : "bg-neutral-50 text-(--gray)"} `} onClick={() => setActiveCategory("garden")}>Garden</button>
      </div>
      {renderCards()}
    </div>
  );
};

export default Catalog;
