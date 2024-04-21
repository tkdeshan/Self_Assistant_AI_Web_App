import React from "react";

const Button = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ">
      {name}
    </button>
  );
};

export default Button;
