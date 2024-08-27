'use client';

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideCard({ dados }) {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000
        }
      }
    ]
  };

  return (
    <div className="slider-container flex flex-col items-center justify-center ">
      <Slider className="w-11/12" {...settings}>
        {dados.map((dado, index) => (
          <div key={index} className="p-4">
            <a href={dado.link} target="_blank">
              <div className="rounded-sm shadow-md p-1 flex flex-col gap-2 items-start justify-center bg-white text-black">
                <img src={dado.image} alt={dado.name} className="w-full" />
                <div>
                  <h3 className="uppercase font-bold font-title">{dado.name}</h3>
                  <p className="text-xs">{dado.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideCard;