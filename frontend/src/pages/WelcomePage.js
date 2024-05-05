import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assests/images/background.jpg";
import logo from "../assests/images/logo.png";
import About from "../assests/images/about.jpg";
import W1Image from "../assests/images/slide1.jpg";
import W2Image from "../assests/images/slide2.jpg";

const WelcomePage = () => {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-row px-20 fixed top-0 right-0 left-0">
        <div className="flex flex-row justify-start w-1/2 py-4 item-center">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-xl" />
          <div className="font-serif text-2xl text-gray-700 font-bold tracking-widest ml-8 py-1">
            AI Self Assistant
          </div>
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

      <div className="flex flex-col gap-5 px-20 py-4">
        <div className="flex justify-start mt-16">
          <div className="w-3/5 flex flex-row h-52 bg-blue-400 bg-opacity-80 rounded-lg">
            <div className="w-1/2">
              <img src={About} alt="about" className="h-full w-full border rounded-l-lg" />
            </div>
            <div className="w-1/2 p-6 flex items-center justify-center">
              <p className="text-white text-md text-justify">
                About
                <br />
                <br />
                "This platform combines a chat interface and a dashboard. It can be assist to users in testing
                their knowledge and receiving career guidance with the AI technology."
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-3/5 flex flex-row h-52 bg-blue-400 bg-opacity-80 rounded-lg">
            <div className="w-1/2">
              <img src={W1Image} alt="w1" className="h-full w-full border rounded-l-lg" />
            </div>
            <div className="w-1/2 p-6 flex items-center justify-center">
              <p className="text-white text-md text-justify">
                Do you want career guidance?
                <br />
                <br />
                "We provide personalized career guidance and advice based on your interests and skills with AI
                technology. Additionally, we provide recommendations to help you navigate and excel in your
                career path."
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-3/5 flex flex-row h-52 bg-blue-400 bg-opacity-80 rounded-lg">
            <div className="w-1/2">
              <img src={W2Image} alt="w1" className="h-full w-full border rounded-l-lg" />
            </div>
            <div className="w-1/2 p-6 flex items-center justify-center">
              <p className="text-white text-md text-justify">
                Do you want to test your knowledge level in skills?
                <br />
                <br />
                "We provide a facility to check your knowledge level through a chat interface with AI
                technology."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 mt-4">
        <div className="text-gray-700 text-sm font-semibold flex justify-center">
          Copyright © 2024 by Kavinda Deshan, All rights reserved.
        </div>
        <div className="text-white text-md flex justify-center">Designed by Kavinda</div>
      </div>
    </div>
  );
};

export default WelcomePage;
