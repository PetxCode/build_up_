"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="mx-2 p-2 w-[200px] h-[280px] ">
          <div className="overflow-hidden bg-green-500 w-full h-full rounded-md  text-white">
            <video
              src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="mx-2 p-2 w-[200px] h-[280px] ">
          <h3 className="bg-red-500 w-full h-full rounded-md  text-white">1</h3>
        </div>
        <div className="mx-2 p-2 w-[200px] h-[280px] ">
          <h3 className="bg-blue-500 w-full h-full rounded-md  text-white">
            1
          </h3>
        </div>
        <div className="mx-2 p-2 w-[200px] h-[280px] ">
          <h3 className="bg-purple-500 w-full h-full rounded-md  text-white">
            1
          </h3>
        </div>
        <div className="mx-2 p-2 w-[200px] h-[280px] ">
          <h3 className="bg-slate-400 w-full h-full rounded-md  text-white">
            1
          </h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
