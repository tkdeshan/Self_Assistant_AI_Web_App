import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function TextBox({
  label = null,
  placeholder = "",
  type = "text",
  Icon = null,
  value,
  setValue,
  required = false,
}) {
  const isPassword = type === "password";

  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative border-2 border-gray-300 w-full rounded mb-5">
      {label && (
        <label className="absolute top-[-12px] left-2 bg-white px-1 text-gray-400 text-sm font-regular font-zenkaku">
          {label}
        </label>
      )}
      <div className="flex items-center p-2">
        {Icon && <Icon className="h-6 w-6 text-gray-300 mr-2" />}
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="appearance-none bg-transparent border-none w-full h-full text-gray-700 p-2 leading-tight focus:outline-none"
          required={required}
        />
        {isPassword && (
          <div className="ml-2 cursor-pointer" onClick={handleTogglePassword}>
            {showPassword ? (
              <EyeSlashIcon className="h-6 w-6 text-gray-300" />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-300" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TextBox;
