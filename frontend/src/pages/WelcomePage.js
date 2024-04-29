import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assests/images/background.jpg";
import logo from "../assests/images/logo.png";
import W1Image from "../assests/images/slide1.jpg";
import W2Image from "../assests/images/slide2.jpg";

const WelcomePage = () => {
  return (
    <div className="bg-cover h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-row px-20">
        <div className="flex flex-row justify-start w-1/2 py-4 item-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <div className="font-serif text-2xl text-white tracking-widest ml-8 py-1">Tech Pack</div>
        </div>
        <div className="flex flex-row justify-end w-1/2 py-4 item-center">
          <Link
            to="/register"
            className="text-white px-5 py-2 mx-2 rounded bg-blue-600 hover:bg-blue-700 ring-2">
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-white px-5 py-2 mx-2 rounded bg-blue-600 hover:bg-blue-700 ring-2">
            Sign In
          </Link>
        </div>
      </div>

      <div className="flex flex-col px-20 py-4">
        <div className="flex flex-row bg-blue-400 bg-opacity-80 rounded-lg">
          <div className="w-1/2 h-60 p-8 flex items-center justify-center">
            <p className="text-white text-md text-justify">
              Do you want career guidance?
              <br />
              <br />
              "We provide personalized career guidance and advice based on your interests and skills with AI
              technology. Additionally, our platform offers tailored recommendations to help you navigate and
              excel in your career path."
            </p>
          </div>
          <div className="w-1/2 h-60">
            <img src={W1Image} alt="w1" className="h-full w-full border rounded-r-lg" />
          </div>
        </div>
        <div className="flex flex-row bg-blue-400 bg-opacity-80 mt-5 rounded-lg">
          <div className="w-1/2 h-60 p-8 flex items-center justify-center">
            <p className="text-white text-md text-justify">
              Do you want to test your knowledge level in skills?
              <br />
              <br />
              "We provide a facility to check your knowledge level through a chat interface with AI
              technology."
            </p>
          </div>
          <div className="w-1/2 h-60">
            <img src={W2Image} alt="w2" className="h-full w-full border rounded-r-lg" />
          </div>
        </div>
      </div>

      <div className="pb-5 mt-4">
        <div className="text-white text-md flex justify-center">
          Copyright 2024 Teck Pack. All Rights Reserved
        </div>
        <div className="text-white text-md flex justify-center">Designed by Kavinda</div>
      </div>
    </div>
  );
};

export default WelcomePage;
