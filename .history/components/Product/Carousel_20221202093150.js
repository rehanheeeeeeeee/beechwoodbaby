import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const styles = {
  slider:
    "lg:w-1/2 w-full max-w-[450px] lg:h-auto  rounded bg-primary flex justify-center relative",
  rightIcon:
    "text-4xl absolute top-[45%] cursor-pointer text-headingColor right-3",
};

const CarouselImage = ({ image }) => {
  return (
    <div className="h-full w-full">
      <Image
        width={1920}
        height={1080}
        className="h-full object-center w-full flex justify-center -z-20"
        alt=""
        src={image}
      />
    </div>
  );
};

const ArrowNext = ({ className, style, onClick }) => {
  return (
    <>
      {" "}
      <div
        className={className}
        style={{
          ...style,
          display: "none",
        }}
        onClick={onClick}
      ></div>{" "}
      <IoIosArrowDroprightCircle
        onClick={onClick}
        className={styles.rightIcon}
      />
    </>
  );
};

const ArrowPrevious = ({ className, style, onClick }) => {
  return (
    <>
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      ></div>
    </>
  );
};

export default function Carousel({ images }) {
  let settings = {
    dota: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrevious />,
  };
  return (
    <Slider {...settings} className={styles.slider}>
      {images.map((image, index) => (
        <CarouselImage key={index} image={image} />
      ))}
    </Slider>
  );
}
