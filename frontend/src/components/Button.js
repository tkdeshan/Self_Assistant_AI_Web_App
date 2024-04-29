import React from "react";

const Button = ({ name, type, onClick }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
