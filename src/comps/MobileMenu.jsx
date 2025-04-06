import React from "react";

const MobileMenu = ({ items, closeMenu }) => {
  return (
    <div className="md:hidden absolute left-0 right-0 mt-4 px-6 py-2 rounded-2xl bg-[#ffffff40] backdrop-blur-sm">
      <ul className="flex-col gap-6 text-base font-light flex md:hidden text-center mt-6">
        {items.map((item, index) => (
          <li
            className={item.classes}
            key={index}
            onClick={() => {
              item.action();
              closeMenu();
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
