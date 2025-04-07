import React, { useState, useEffect } from "react";
import logo from "/Logo.svg";
import navigateToSection from "../navigateToSection";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingScroll, setPendingScroll] = useState(null);

  const socialsItems = [
    { id: 1, icon: "/socials/TG.svg", alt: "Telegram", href: "/" },
    { id: 2, icon: "/socials/VK.svg", alt: "Vk", href: "/" },
    { id: 3, icon: "/socials/TT.svg", alt: "Tiktok", href: "/" },
    { id: 4, icon: "/socials/WP.svg", alt: "WhatsApp", href: "/" },
  ];

  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      const element = document.getElementById(pendingScroll);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setPendingScroll(null);
      }
    }
  }, [location, pendingScroll]);

  const aboutClick = () => {
    navigate(`/about`);
  };

  return (
    <div
      id="contacts"
      className="max-w-7xl mx-auto flex flex-col gap-8 items-center cursor-pointer px-2.5 xl:px-0"
    >
      <div
        onClick={() =>
          navigateToSection(navigate, location, setPendingScroll, "main")
        }
      >
        <img className="h-8" src={logo} alt="Fashion" />
      </div>
      {/* Socials */}
      <div className="flex flex-row gap-8">
        {socialsItems.map((item, index) => (
          <div
            key={index}
            className="h-8 w-8 flex items-center justify-center hover:bg-(--coral) rounded-2xl transition-transform duration-300 hover:-translate-y-0.5"
          >
            <a href={item.href} target="_blank">
              <img src={item.icon} alt={item.alt} />
            </a>
          </div>
        ))}
      </div>
      {/* DOCS */}
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <a
          className="text-(--gray) font-light transition-transform hover:translate-y-0.5 duration-400 text-center"
          href="/"
          target="_blank"
        >
          Условия обмена и возврата
        </a>
        <span className="h-4 w-[1px] bg-(--gray) sm:block hidden"></span>
        <a
          className="text-(--gray) font-light transition-transform hover:translate-y-0.5 duration-400 text-center"
          href="/"
          target="_blank"
        >
          Оферта и политика конфиденциальности
        </a>
        <span className="h-4 w-[1px] bg-(--gray) sm:block hidden"></span>
        <div
          className="text-(--gray) font-light transition-transform hover:translate-y-0.5 duration-400 text-center"
          onClick={aboutClick}
        >
          О бренде
        </div>
      </div>
      {/* RIGHTS & DEV */}
      <div className="flex flex-col gap-2 items-center mb-16">
        <p className="font-light">
          Copyright &copy; 2025-{currentYear} Fashion All Rights Reserved
        </p>
        <p className="text-(--gray) font-light">
          Дизайн и разработка сайта:&nbsp;
          <a
            className="text-(--gray) hover:text-[#0A493C] font-light underline-animation"
            href="https://t.me/vaskadagamaa26"
            target="_blank"
          >
            Vasiliy Kirichenko
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
