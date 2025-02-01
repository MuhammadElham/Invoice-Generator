import React from "react";

const Button = ({ text, bgColor, textColor,borderColor,hoverBg,hoverText,mt="mt-5",onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${borderColor} ${hoverBg} ${hoverText}
      ${mt} cursor-pointer hover:scale-105 duration-300 sm:py-2 sm:px-8 sm:font-bold sm:text-base text-xs py-1 px-3 border-2 shadow transition-all rounded-md relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
