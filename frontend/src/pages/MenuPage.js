import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assests/images/logo.png";
import {
  ChartBarIcon,
  PencilSquareIcon,
  EyeIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const MenuPage = ({ page }) => {
  const location = useLocation();

  return (
    <div className="flex flex-row h-screen w-full bg-gray-100">
      <div className="h-screen w-1/6 bg-blue-600">
        <div className="flex flex-row justify-center r w-full p-3 border-b border-gray-100">
          <div className="font-serif text-2xl text-white tracking-widest  py-1">AI Self Assistant</div>
        </div>
        <div className="flex flex-col">
          <Link
            to="/chat"
            className={`w-full flex flex-row py-4 text-white text-md ${
              location.pathname === "/chat" ? "bg-blue-700" : "hover:bg-blue-700"
            }`}>
            <EyeIcon className="w-8 h-8 mx-5" />
            <button>Chat Interface</button>
          </Link>

          <Link
            to="/dashboard"
            className={`w-full flex flex-row py-4 text-white text-md ${
              location.pathname === "/dashboard" ? "bg-blue-700" : "hover:bg-blue-700"
            }`}>
            <ChartBarIcon className="w-8 h-8 mx-5" />
            <button>Dashboard</button>
          </Link>

          <Link
            to="/editprofile"
            className={`w-full flex flex-row py-4 text-white text-lg ${
              location.pathname === "/editprofile" ? "bg-blue-700" : "hover:bg-blue-700"
            } mb-10`}>
            <PencilSquareIcon className="w-8 h-8 mx-5" />
            <button>Edit profile</button>
          </Link>
        </div>

        <div className="flex flex-col-reverse">
          <Link to="/login" className="w-full flex flex-row hover:bg-red-500 py-4 text-white text-md">
            <ArrowLeftStartOnRectangleIcon className="w-8 h-8 mx-5" />
            <button>Logout</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-5/6 pb-5">
        <div className="flex flex-row-reverse w-full bg-blue-600 p-3">
          <img src={logo} alt="Login" className="w-10 h-10 rounded-xl mr-6" />
        </div>

        <div style={{ maxHeight: "90%" }}>{page}</div>
      </div>
    </div>
  );
};

export default MenuPage;
