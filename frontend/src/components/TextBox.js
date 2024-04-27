import React from "react";

function TextBox({ label = null, placeholder = "", value, setValue, required = false }) {
  return (
    <div className="relative border-2 border-gray-300 w-full rounded mb-5">
      {label && (
        <label className="absolute top-[-12px] left-2 bg-white px-1 text-gray-400 text-sm font-regular font-zenkaku">
          {label}
        </label>
      )}
      <div className="flex items-center p-1">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="appearance-none bg-transparent border-none w-full h-full text-gray-700 p-1 leading-tight focus:outline-none resize-none"
          style={{ minHeight: "100px", maxHeight: "200px" }}
          required={required}
        />
      </div>
    </div>
  );
}

export default TextBox;
