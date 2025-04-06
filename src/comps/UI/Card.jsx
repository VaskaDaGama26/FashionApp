import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ specs, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${category}/${specs.id}`);
  };

  return (
    <>
      <div
        className={`flex flex-col gap-0 shadowCustom cursor-pointer w-[300px] sm:w-96 mx-auto lg:mx-0`}
        onClick={handleClick}
      >
        <img
          className="hover:grayscale-75 duration-500"
          src={specs.img}
          alt={specs.img}
        />
        <div className="h-[92px] bg-neutral-50">
          <div className="flex flex-row items-center justify-between px-4 py-6">
            <div>
              <p className="text-base font-normal">{specs.label}</p>
              <p className="uppercase text-base font-normal text-(--gray) border-b-1 border-(--coral)">
                {specs.collection}
              </p>
            </div>
            <p className="font-semibold text-neutral-950 text-base uppercase">
              {specs.price}&nbsp;RUB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
