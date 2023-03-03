import { useState } from "react";
const defaultColor = "bg-trasparent border-2 px-16 border-[#033323] rounded-xl";
const Data = ({ question, answer, i, selected, setSelected }) => {
  const [color, setColor] = useState(defaultColor);

  const toggle = (i) => {
    if (selected == i) {
      setColor(defaultColor);
      return setSelected(null);
    }
    {
      setSelected(i);
      setColor(
        "bg-[#033323] text-white border-2 px-16 border-[#033323] rounded-xl"
      );
    }
  };
  return (
    <div className={`mb-[5px] ${color}`}>
      <div
        className="flex justify-between text-base lg:text-[22px] 2xl:text-[32px] cursor-pointer container py-16 2xl:py-8"
        onClick={() => toggle(i)}
      >
        {question}
        <span>{selected == i ? "-" : "+"}</span>
      </div>
      <div
        className={`${
          selected === i ? " max-h-56 lg:max-h-28" : "max-h-0"
        } transition-all duration-300 overflow-hidden`}
      >
        <div className=" text-white text-[14px] lg:text-base 2xl:text-lg container pb-24">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Data;
