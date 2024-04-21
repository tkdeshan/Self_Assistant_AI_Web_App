import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assests/constants/images/background.jpg";
import logo from "../assests/constants/images/logo.png";
import W1Image from "../assests/constants/images/slide1.jpg";
import W2Image from "../assests/constants/images/slide2.jpeg";

const WelcomePage = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-row px-5">
        <div className="flex flex-row justify-start w-1/2 py-4 item-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <div className="font-serif text-2xl text-white tracking-widest ml-8 py-1">Tech Pack</div>
        </div>
        <div className="flex flex-row justify-end w-1/2 py-4 item-center">
          <Link to="/register" className="text-white px-5 py-2 mx-2 rounded ring-2">
            Sign Up
          </Link>
          <Link to="/login" className="text-white px-5 py-2 mx-2 rounded ring-2">
            Sign In
          </Link>
        </div>
      </div>

      <div className="flex flex-col px-20 py-4">
        <div className="flex flex-row p-2 bg-gray-300 bg-opacity-20 rounded-lg">
          <div className="w-1/2 h-60 p-5">
            <p className="text-white">
              Do you have a dream to work in the ICT field? So this platform for you.
            </p>
          </div>
          <div className="w-1/2 h-60 p-1">
            <img src={W1Image} alt="w1" className="h-full w-full border border-gray-400 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-row p-2 bg-gray-300 bg-opacity-20 mt-5 rounded-lg">
          <div className="w-1/2 h-60 p-5">
            <p className="text-white"> Do you have a dream to work in the ICT field?</p>
          </div>
          <div className="w-1/2 h-60 p-1">
            <img src={W2Image} alt="w2" className="h-full w-full border border-gray-400 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="pb-5">
        <div className="text-white flex justify-center">Copyright 2024 Teck Pack. All Rights Reserved</div>
        <div className="text-white flex justify-center">Designed by Kavinda</div>
      </div>
    </div>
  );
};

export default WelcomePage;
