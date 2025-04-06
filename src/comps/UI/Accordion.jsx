import React, { useState, useRef, useEffect } from "react";
import arrow_down from "/icons/Arrow.svg";

function Accordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [contentHeight, setContentHeight] = useState({});

  const contentRefs = useRef([]);

  useEffect(() => {
    const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setContentHeight(heights);
  }, [sections]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col px-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`p-6 ${
            activeIndex === index
              ? "bg-neutral-50"
              : "bg-[#e2e3dd] hover:bg-[#d9dad58b]"
          }`}
        >
          <button
            className={`flex text-neutral-950 text-base/tight sm:text-xl/tight justify-between pb-3 w-full text-left cursor-pointer  
                `}
            onClick={() => toggleAccordion(index)}
          >
            {section.title}
            <img
              src={arrow_down}
              alt=""
              className={`transition-transform duration-300 ${
                activeIndex === index ? "-rotate-90" : "rotate-90"
              }`}
            />
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight:
                activeIndex === index ? `${contentHeight[index]}px` : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
            className={`text-xs/normal sm:text-base/normal text-(--gray)`}
          >
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
