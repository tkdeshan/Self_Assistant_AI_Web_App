import React, { useState } from "react";
import logo from "../assests/constants/images/logo.png";
import {
  ChartBarIcon,
  PencilSquareIcon,
  PencilIcon,
  EyeIcon,
  ArrowLeftStartOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import TextBox from "../components/TextBox";

const MenuPage = () => {
  const [chat, setChat] = useState("");

  return (
    <div className="flex flex-row h-screen w-full bg-gray-100">
      <div className="h-screen w-1/5 bg-blue-500">
        <div className="flex flex-row justify-center r w-full p-3 border-b border-gray-100">
          <img src={logo} alt="Login" className="w-10 h-10 ml-2" />
          <div className="font-serif text-2xl text-white tracking-widest ml-5 py-1">Teck Pack</div>
        </div>

        <div className="flex flex-col">
          <div className="w-full flex flex-row hover:bg-blue-600 py-4 text-white text-lg">
            <EyeIcon className="w-8 h-8 mx-5" />
            <button>Chat Interface</button>
          </div>

          <div className="w-full flex flex-row hover:bg-blue-600 py-4 text-white text-lg">
            <ChartBarIcon className="w-8 h-8 mx-5" />
            <button>Dashboard</button>
          </div>

          <div className="w-full flex flex-row hover:bg-blue-600 py-4 text-white text-lg mb-10">
            <PencilSquareIcon className="w-8 h-8 mx-5" />
            <button>Edit profile</button>
          </div>
        </div>

        <div className="flex flex-col-reverse">
          <div className="w-full flex flex-row  hover:bg-red-500 py-4 text-white text-lg">
            <ArrowLeftStartOnRectangleIcon className="w-8 h-8 mx-5" />
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen w-4/5 pb-5">
        <div className="flex flex-row-reverse w-full bg-blue-500 p-3">
          <UserCircleIcon className="w-10 h-10 mx-5 text-white" />
        </div>
        <div className="flex flex-col h-screen w-4/5 mx-10 pb-5">chat histry</div>
        <div className="px-10">
          <TextBox type="text" Icon={PencilIcon} value={chat} setValue={setChat} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
