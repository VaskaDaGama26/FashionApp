import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../catalogData.json";
import arrow from "/FashionApp/icons/arrowButtonWhite.svg";

const CardDetail = () => {
  const { category, id } = useParams();
  const [activeSize, setActiveSize] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const card = data[category]?.find((item) => item.id === parseInt(id));

  if (!card) {
    return (
      <h1 className="mt-12 mb-32 mx-auto px-6 text-6xl max-w-7xl">
        Card not found
      </h1>
    );
  }

  const handleSizeClick = (sizeName, isActive) => {
    if (isActive === "false") return;
    setActiveSize(sizeName);
  };

  return (
    <div className="max-w-7xl mx-auto px-2.5 mb-24">
      <div className="flex flex-col xl:flex-row justify-center gap-24 items-center mx-auto">
        {/* PHOTOS */}
        <div className="flex flex-col sm:flex-row gap-4 my-16">
          <img
            src={card.img}
            alt={card.label}
            className="w-[300px] sm:w-[400px] h-auto mx-auto sm:mx-0"
          />
          <div className="flex flex-row sm:flex-col gap-4 mx-auto sm:mx-0">
            <img
              src={card.img2}
              alt={card.label}
              className="w-[142px] h-[172px] sm:w-[193px] sm:h-[234px]"
            />
            <img
              src={card.img3}
              alt={card.label}
              className="w-[142px] h-[172px] sm:w-[193px] sm:h-[234px]"
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl sm:text-5xl/tight font-medium">
            {card.label}
          </h1>
          <p className="text-[28px] font-bold">{card.price} RUB</p>
          {/* SIZES */}
          <div className="gap-4 flex flex-col">
            <h3 className="font-base">РАЗМЕР</h3>
            <div className="flex flex-row gap-2">
              {card.size.map((size) => (
                <div
                  key={size.id}
                  onClick={() => handleSizeClick(size.name)}
                  className={`text-base/tight font-light w-8 h-8 flex items-center justify-center border
                    ${
                      size.active === "false"
                        ? "border-(--gray25) text-(--gray25)"
                        : activeSize === size.name
                        ? "border-neutral-950 text-neutral-950 cursor-pointer"
                        : "border-(--gray50) text-neutral-950 cursor-pointer"
                    }`}
                >
                  {size.name}
                </div>
              ))}
            </div>
          </div>
          <p className="max-w-[487px] text-base/normal text-neutral-950">
            {card.desc}
          </p>
          <p className="max-w-[487px] text-base/normal text-gray-600">
            {card.material}
          </p>
          <button className="rounded-lg bg-neutral-950 text-neutral-50 text-center flex flex-row items-center text-xl/tight px-8 py-3 w-fit duration-500 cursor-pointer relative overflow-hidden group">
            <span className="uppercase duration-500 relative inline-block cursor-pointer group-hover:pr-2">
              Купить
            </span>
            <img
              className="absolute opacity-0 group-hover:opacity-100 top-1/2 -right-2 pr-6 duration-500 h-4 transform -translate-y-1/2"
              src={arrow}
              alt="Buy"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
