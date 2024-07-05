import React, { useState } from "react";

const SelectButton = ({ label, onChange }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onChange(label, newSelected);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center space-x-2 px-4 py-1 w-full`}
    >
      <span
        className={`inline-block w-4 h-4 border border-gray-400 rounded ${
          selected ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        {selected && <span className="block text-center text-white">✓</span>}
      </span>
      <span>{label}</span>
    </button>
  );
};

export default SelectButton;
