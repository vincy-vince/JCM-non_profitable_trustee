import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ShortUniqueId from "short-unique-id";
const Carousel2 = ({ slides }) => {
  // const uid = new ShortUniqueId({ length: 10 });
  // console.log(uid.rnd());

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="w-[2/3] mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((s) => {
            return <div> {s} </div>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel2;
