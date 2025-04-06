import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../catalogData.json";
import arrow from "/icons/arrowButtonWhite.svg";

const CardDetail = () => {
  const { category, id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const card = data[category]?.find((item) => item.id === parseInt(id));

  if (!card) {
    return <h1>Card not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-2.5 mb-24">
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center mx-auto">
        {/* PHOTOS */}
        <div className="flex flex-col sm:flex-row gap-4 my-16">
          <img
            src={card.img}
            alt={card.label}
            className="w-[300px] sm:w-[400px] h-auto mx-auto sm:mx-0"
          />
          <div className="flex flex-row sm:flex-col gap-4 mx-auto sm:mx-0">
            <img
              src={card.img}
              alt={card.label}
              className="w-[142px] sm:w-[193px] h-auto"
            />
            <img
              src={card.img}
              alt={card.label}
              className="w-[142px] sm:w-[193px] h-auto"
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl sm:text-[64px]/tight font-medium">{card.label}</h1>
          <p className="text-[28px] font-bold">{card.price} RUB</p>
          <div>
            <h3 className="font-base">РАЗМЕР</h3>
          </div>
          <p className="max-w-[487px] text-base/normal text-neutral-950">
            Beige Suit коллекции FASHION NOMAD – это сочетание элегантности и
            современного стиля. Он выполнен из высококачественных материалов,
            обеспечивающих комфорт и непревзойденный внешний вид.
          </p>
          <p className="max-w-[487px] text-base/normal text-(--gray)">
            Материал: 70% шерсти и 30% вискозы, подкладка выполнена из 100%
            полиэстера
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
