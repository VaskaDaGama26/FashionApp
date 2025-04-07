import React, { useEffect } from "react";
import Heading from "./UI/Heading";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const aboutItems = [
    {
      id: 1,
      name: "Oliver Grant",
      role: "Co-Founder",
      img: "/about/about2.jpg",
    },
    {
      id: 2,
      name: "Ethan Hughes",
      role: "CEO of Fashion",
      img: "/about/about1.jpg",
    },
    {
      id: 3,
      name: "Sophia Bennett",
      role: "Co-Founder",
      img: "/about/about3.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-12 mb-24 px-2.5">
      <div className="my-12">
        <Heading label="О бренде" />
      </div>
      <p className="indent-5 text-sm/loose sm:text-lg/relaxed font-light">
        <span className="gropled-font text-2xl sm:text-4xl">FASHION</span> — это
        премиальный бренд, который сочетает в себе изысканность, инновации и
        безупречное качество. Мы создаем уникальные коллекции, подчеркивающие
        индивидуальность и отражающие современные модные тенденции. Наш бренд
        стремится превратить каждое изделие в произведение искусства, где каждая
        деталь имеет значение. Использование лучших материалов и безукоризненное
        мастерство делают каждый продукт символом роскоши и стиля. В центре
        философии Fashion — вдохновение, самовыражение и стремление к
        совершенству. Этот бренд для тех, кто ценит эксклюзивность и безупречный
        вкус. Fashion — это больше, чем мода, это стиль жизни.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 mt-12">
        {aboutItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 shadowCustom w-fit mx-auto">
            <img
              className="w-[300px] sm:w-[400px] hover:grayscale-75 duration-500"
              src={item.img}
              alt={item.name}
            />
            <div className="flex flex-col gap-0 my-2">
              <p className="border-b-1 border-(--coral) gropled-font text-2xl text-center w-fit mx-auto my-2">
                {item.name}
              </p>
              <p className="text-base/tight gropled-font w-fit mx-auto">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
