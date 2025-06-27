import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Corousal = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "40px",
  };

  return (
    <div className="w-[2/3] mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((s, index) => {
            return <div key={index}> {s} </div>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Corousal;
