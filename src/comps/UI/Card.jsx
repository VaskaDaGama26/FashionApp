import React from "react";

const Card = ({ specs }) => {
  return (
    <>
      <a className={`flex flex-col gap-0 shadow-md w-[300px] sm:w-96 mx-auto lg:mx-0`} href="/">
        <img className="hover:grayscale-75 duration-500" src={specs.img} alt={specs.img} />
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
      </a>
    </>
  );
};

export default Card;
