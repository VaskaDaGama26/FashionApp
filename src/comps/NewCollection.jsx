import React from "react";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import Heading from "./UI/Heading";
import Card from "./UI/Card";
import data from "../catalogData.json";

const NewCollection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const nomadData = data.nomad || [];

  return (
    <div className="flex flex-col mx-auto gap-8">
      <div className="flex flex-col gap-4">
        {/* Marquee */}
        <div
          ref={ref}
          className="w-56 text-base overflow-hidden font-light mx-auto"
        >
          <Marquee play={inView} autoFill="true">
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

      {/* Display the "nomad" category cards */}
      <div className="flex px-2.5 xl:px-0 flex-col lg:flex-row gap-8 lg:gap-0 justify-between w-full max-w-7xl mx-auto mb-24">
        {nomadData.map((card) => (
          <Card
            key={card.id}
            specs={card}
            category={card.category || "nomad"}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
