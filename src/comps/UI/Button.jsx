import React from "react";
import arrow from "/icons/arrowButton.svg";

const Button = ({rotate}) => {
  return (
    <div className="flex cursor-pointer items-center justify-center shadowCustom h-10 w-10 bg-[rgba(217,217,217,0.5)] rounded-xl">
      <div className="flex items-center justify-center bg-neutral-50 hover:bg-neutral-100 shadowCustom h-8 w-8 rounded-lg">
        <img className={`w-4 h-4 rotate-${rotate}`} src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Button;
