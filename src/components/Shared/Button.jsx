import React from "react";

const Button = ({ text, bgColor, textColor,borderColor,hoverBg,hoverText,onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${borderColor} ${hoverBg} ${hoverText} cursor-pointer mt-5 hover:scale-105 duration-300 py-2 px-8 font-bold border-2 shadow transition-all rounded-md relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
