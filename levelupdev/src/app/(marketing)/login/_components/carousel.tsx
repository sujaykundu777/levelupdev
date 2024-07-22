"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

const carouselItems = [
  {
    heading: "Who are we?",
    para: `A web developers community. learn, connect and build together. 
        We believe as a developer, it takes more than learning to thrive.`,
  },
  {
    heading: "Who are we?",
    para: `A web developers community. learn, connect and build together. 
        We believe as a developer, it takes more than learning to thrive.`,
  },
  {
    heading: "Who are we?",
    para: `A web developers community. learn, connect and build together. 
        We believe as a developer, it takes more than learning to thrive.`,
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1950,
    cssEase: "linear",
    boxShadow: "none",
  };

  return (
    <div className="flex absolute bottom-[15%] w-full left-1/2 -translate-x-[50%]">
      <div className="flex flex-wrap w-[75%] mx-auto">
        <Slider className="flex w-full" {...settings}>
          {carouselItems.map((item, index) => (
            <div className="text-white w-full" key={index}>
              <h3 className="text-[50px] font-medium">{item.heading}</h3>
              <p className="text-[23px] font-bold">{item.para}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
