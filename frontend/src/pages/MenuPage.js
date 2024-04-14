import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assests/constants/images/logo.png";
import {
  ChartBarIcon,
  PencilSquareIcon,
  EyeIcon,
  ArrowLeftStartOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const MenuPage = ({ page }) => {
  const location = useLocation();

  return (
    <div className="flex flex-row h-screen w-full bg-gray-100">
      <div className="h-screen w-1/5 bg-sky-900">
        <div className="flex flex-row justify-center r w-full p-3 border-b border-gray-100">
          <img src={logo} alt="Login" className="w-10 h-11 ml-2" />
          <div className="font-serif text-2xl text-white tracking-widest ml-5 py-1">Tech Pack</div>
        </div>
        <div className="flex flex-col">
          <Link
            to="/chat"
            className={`w-full flex flex-row py-4 text-white text-lg ${
              location.pathname === "/chat" ? "bg-slate-600" : "hover:bg-slate-600"
            }`}>
            <EyeIcon className="w-8 h-8 mx-5" />
            <button>Chat Interface</button>
          </Link>

          <Link
            to="/dashboard"
            className={`w-full flex flex-row py-4 text-white text-lg ${
              location.pathname === "/dashboard" ? "bg-slate-600" : "hover:bg-slate-600"
            }`}>
            <ChartBarIcon className="w-8 h-8 mx-5" />
            <button>Dashboard</button>
          </Link>

          <Link
            to="/editprofile"
            className={`w-full flex flex-row py-4 text-white text-lg ${
              location.pathname === "/editprofile" ? "bg-slate-600" : "hover:bg-slate-600"
            } mb-10`}>
            <PencilSquareIcon className="w-8 h-8 mx-5" />
            <button>Edit profile</button>
          </Link>
        </div>

        <div className="flex flex-col-reverse">
          <Link to="/login" className="w-full flex flex-row hover:bg-red-900 py-4 text-white text-lg">
            <ArrowLeftStartOnRectangleIcon className="w-8 h-8 mx-5" />
            <button>Logout</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-screen w-4/5 pb-5">
        <div className="flex flex-row-reverse w-full bg-sky-900 p-3">
          <UserCircleIcon className="w-10 h-11 mx-5 text-white" />
        </div>
        <div>{page}</div>
      </div>
    </div>
  );
};

export default MenuPage;
