import React from "react";
import Marquee from "react-fast-marquee";
import Heading from "./UI/Heading";
import Card from "./UI/Card";

const NewCollection = () => {
  const specsM = {
    label: "Beige Suit (M)",
    collection: "Fashion Nomad",
    price: "12.990",
    img: "/cards/nomad/NomadM1.jpg"
  };
  const specsW = {
    label: "Beige Suit (W)",
    collection: "Fashion Nomad",
    price: "15.990",
    img: "/cards/nomad/NomadW1.jpg"
  };

  return (
    <div className="flex flex-col mx-auto gap-8">
      <div className="flex flex-col gap-4">
        {/* Marquee */}
        <div className="w-56 text-base font-light mx-auto">
          <Marquee autoFill="true">
            <span className="text-(--coral)">&nbsp;*&nbsp;</span> NOMAD NOMAD{" "}
          </Marquee>
        </div>
        {/* Heading */}
        <Heading label="Новая коллекция" />
        {/* Second Heading */}
        <div>
          <h2 className="uppercase text-base font-light text-center">
            NOMAD: Стиль путешествий
          </h2>
          <h2 className="uppercase text-base font-light text-center">
            2025 / 03
          </h2>
        </div>
      </div>
      <div className="flex px-2.5 xl:px-0 flex-col lg:flex-row gap-8 lg:gap-0 justify-between w-full max-w-7xl mx-auto mb-24">
        <Card specs={specsW} />
        <Card specs={specsM} />
      </div>
    </div>
  );
};

export default NewCollection;
