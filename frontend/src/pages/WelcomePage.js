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

      <div className="relative">
        <div
          style={{
            width: "100%",
            height: "900px", // Adjust the height as needed
            backgroundColor: "#dfe6e8",
            position: "relative",
          }}
        >
          {/* First Box */}
          <div
            style={{
              position: "absolute",
              top: "70px", // Adjust the top position as needed
              left: "68%",
              transform: "translateX(-50%)",
              width: "850px", // Adjust the width as needed
              height: "250px", // Adjust the height as needed
              backgroundColor: "#fff", // Box color
              border: "2px solid #000", // Border color
              borderRadius: "10px", // Border radius
              padding: "20px", // Add padding for the paragraph
            }}
          >
            <p
              style={{
                textAlign: "center", // Text justification
                color: "#333", // Font color
                fontSize: "18px", // Font size
              }}
            >
              Do you have a dream to work in the ICT field? So this platform for you. 
            </p>
          </div>

          {/* W1 Image */}
          <img
            src={W1Image}
            alt="w1 image"
            style={{
              maxWidth: "500px",
              width: "100%",
              height: "300px",
              marginLeft: "-450px",
              position: "absolute",
              top: "200px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "2px solid #000",
              borderRadius: "10px",
            }}
          />

          {/* Second Box */}
          <div
            style={{
              position: "absolute",
              top: "435px", // Adjust the top position as needed
              left: "32%",
              transform: "translateX(-50%)",
              width: "850px", // Adjust the width as needed
              height: "250px", // Adjust the height as needed
              backgroundColor: "#fff", // Box color
              border: "2px solid #000", // Border color
              borderRadius: "10px", // Border radius
              padding: "20px", // Add padding for the paragraph
            }}
          >
            <p
              style={{
                textAlign: "center", // Text justification
                color: "#333", // Font color
                fontSize: "18px", // Font size
              }}
            >
              Do you have a dream to work in the ICT field?
            </p>
          </div>

          {/* W2 Image */}
          <img
            src={W2Image}
            alt="w2 image"
            style={{
              maxWidth: "500px",
              width: "100%",
              height: "300px",
              marginLeft: "450px",
              position: "absolute",
              top: "550px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "2px solid #000",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      <div className="pb-5">
        <div className="text-white flex justify-center">Copyright 2024 Teck Pack. All Rights Reserved</div>
        <div className="text-white flex justify-center">Designed by Shammi</div>
      </div>
    </div>
  );
};

export default WelcomePage;

