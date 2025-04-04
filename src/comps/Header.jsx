import React, { useState, useEffect } from "react";
import burger from "/icons/Menu.svg";
import close from "/icons/Close.svg";
import logo from "/Logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollPosition && currentScroll > 600) {
        setHidden(true);
      } else {
        setHidden(false); 
      }

      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    {
      id: 1,
      label: "Главная",
      link: "#main",
      classes:
        "hover:transition-transform hover:duration-400 hover:translate-y-0.5 hover:text-(--gray)",
    },
    {
      id: 2,
      label: "Каталог",
      link: "#catalog",
      classes:
        "hover:transition-transform hover:duration-400 hover:translate-y-0.5 hover:text-(--gray)",
    },
    {
      id: 3,
      label: "FAQ",
      link: "#faq",
      classes:
        "hover:transition-transform hover:duration-400 hover:translate-y-0.5 hover:text-(--gray)",
    },
    {
      id: 4,
      label: "Напишите нам",
      link: "#contacts",
      classes:
        "w-fit mx-auto cursor-pointer text-base px-4 py-2 bg-neutral-50 rounded-sm border-b-1 border-(--coral) hover:border-b-3 hover:duration-300",
    },
  ];

  return (
    <header
      className={`sticky top-4 max-w-7xl mx-2.5 xl:mx-auto z-50 duration-300 ${
        hidden ? "-translate-y-[calc(100%+1rem)]" : "translate-y-0"
      }`}
    >
      <div className="h-[60px] flex flex-row items-center justify-between px-6 backdrop-blur-sm bg-[#ffffff40] rounded-2xl">
        <img className="w-[100px]" src={logo} alt="Fashion" />
        <ul className="flex-row items-center gap-6 text-base font-light hidden md:flex text-neutral-950">
          {navItems.map((item, index) => (
            <a className={item.classes} key={index} href={item.link}>
              <li>{item.label}</li>
            </a>
          ))}
        </ul>
        <div onClick={toggleMenu} className="flex md:hidden">
          <img
            className={`transition-transform duration-300 ease ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
            src={menuOpen ? close : burger}
            alt="Menu"
          />
        </div>
      </div>
      {menuOpen && (
        <MobileMenu items={navItems} closeMenu={() => setMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
