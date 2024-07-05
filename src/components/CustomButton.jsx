import React from 'react';

const CustomButton = ({ text, bgColor, textColor,onClick }) => {
  return (
    <button onClick={onClick} className={`cursor-pointer rounded-lg shadow-lg  ${bgColor} ${textColor} px-6 py-2 text-sm`}>
      {text}
    </button>
  );
};

export default CustomButton;
