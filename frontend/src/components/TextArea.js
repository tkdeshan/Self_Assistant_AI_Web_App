import React, { useRef, useEffect } from "react";

function TextArea({ label = null, placeholder = "", value, setValue, required = false }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 400)}px`;
    }
  }, [value]);

  return (
    <div className="relative border-2 border-gray-300 w-full rounded">
      {label && (
        <label className="absolute top-[-12px] left-2 bg-white px-1 text-gray-400 text-sm font-regular font-zenkaku">
          {label}
        </label>
      )}
      <div className="flex items-center p-1">
        <textarea
          ref={textareaRef}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="appearance-none bg-transparent border-none w-full h-full text-gray-700 p-1 leading-tight focus:outline-none resize-none"
          style={{ minHeight: "20px", maxHeight: "200px", overflowY: "auto" }}
          required={required}
        />
      </div>
    </div>
  );
}

export default TextArea;
