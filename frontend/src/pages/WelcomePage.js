import React from "react";
import backgroundImage from "../assests/constants/images/background.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assests/constants/images/slide1.jpg";
import slide2 from "../assests/constants/images/slide2.jpg";
import slide3 from "../assests/constants/images/slide3.jpg";
import slide4 from "../assests/constants/images/slide4.jpg";
import logo from "../assests/constants/images/logo.png";

const WelcomePage = () => {
  // Your slide data
  const slides = [
    { id: 1, imageUrl: slide1, altText: "Slide 1" },
    { id: 2, imageUrl: slide2, altText: "Slide 2" },
    { id: 3, imageUrl: slide3, altText: "Slide 3" },
    { id: 4, imageUrl: slide4, altText: "Slide 4" },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-row px-5">
        <div className="flex flex-row justify-start w-1/2 py-4 item-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <div className="font-serif text-2xl text-white tracking-widest ml-8 py-1">Teck Pack</div>
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

      <div className="mb-2 w-full h-1/2">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div className="" key={slide.id}>
              <img src={slide.imageUrl} alt={slide.altText} className="w-full h-2/3" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="pb-5">
        <div className="text-white flex justify-center">Copyright 2024 Teck Pack. All Rights Reserved</div>
        <div className="text-white flex justify-center">Designed by Shammi</div>
      </div>
    </div>
  );
};

export default WelcomePage;
