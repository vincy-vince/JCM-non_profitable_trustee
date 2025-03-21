import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Corousal = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-auto m-auto">
      <div
        className=""
      >
        <Slider {...settings}>
          {slides.map((s) => {
            return <div> {s} </div>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Corousal;
