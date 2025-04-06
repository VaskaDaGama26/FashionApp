import React, { useState } from "react";
import Heading from "./UI/Heading";
import Card from "./UI/Card";
import data from "../catalogData.json";

const Catalog = () => {
  const categories = Object.keys(data).filter((key) => key !== "nomad");

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const renderCards = () => {
    const cards = data[activeCategory].map((item) => ({
      ...item,
      category: activeCategory,
    }));

    return (
      <div className="flex flex-wrap gap-8 justify-between mb-24">
        {cards.map((card) => (
          <Card
            key={`${activeCategory}-${card.id}`}
            specs={card}
            category={card.category}
          />
        ))}
      </div>
    );
  };

  const renderButtons = () => {
    return categories.map((category) => (
      <button
        key={category}
        className={`sm:text-base/tight text-sm/tight px-4 py-2 h-fit rounded-xl font-normal shadowCustom uppercase ${
          activeCategory === category
            ? "bg-(--coral) text-neutral-950"
            : "bg-neutral-50 text-(--gray) hover:bg-neutral-100 cursor-pointer"
        }`}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    ));
  };

  return (
    <div
      id="catalog"
      className="flex flex-col gap-8 max-w-7xl mx-auto px-2.5 xl:px-0"
    >
      <Heading label="Каталог" />
      <div className="flex flex-row justify-between items-center">
        {/* Categories Buttons */}
        <div className="flex flex-row items-center gap-2 sm:gap-6">
          {renderButtons()}
        </div>
      </div>

      {renderCards()}
    </div>
  );
};

export default Catalog;
