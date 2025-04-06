import React, { useEffect, useState } from "react";
import right from "/icons/Arrow.svg";
import navigateToSection from "../navigateToSection";
import { useNavigate, useLocation } from "react-router-dom";

const FirstScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingScroll, setPendingScroll] = useState(null);

  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      const element = document.getElementById(pendingScroll);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setPendingScroll(null);
      }
    }
  }, [location, pendingScroll]);

  return (
    <div
      id="main"
      className="relative h-dvh bg-[url(/BG.jpg)] bg-cover bg-center -mt-[60px] mb-24"
    >
      <div className="max-w-7xl flex flex-col gap-3 mx-auto absolute bottom-5 sm:bottom-10 left-0 right-0">
        <div
          onClick={() =>
            navigateToSection(navigate, location, setPendingScroll, "catalog")
          }
          className="w-fit cursor-pointer rounded-2xl flex flex-row items-center gap-2 text-base/tight px-5 py-1.5 mx-2.5 bg-neutral-50 group transition-transform duration-300 hover:cursor-pointer"
        >
          <p className="text-neutral-950">Каталог</p>
          <span className="h-4 w-[1px] bg-(--gray)"></span>
          <p className="text-(--gray) font-light transition-colors group-hover:text-neutral-950">
            Перейти
          </p>
          <img
            className="transition-transform duration-300 group-hover:translate-x-1"
            src={right}
            alt="Catalog"
          />
        </div>

        <h1 className="text-4xl/snug sm:text-6xl/snug px-2.5 px- gropled-font">
          Стиль для тех, кто впереди
        </h1>
      </div>
    </div>
  );
};

export default FirstScreen;
