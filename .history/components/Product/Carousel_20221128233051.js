import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const styles = {
  slider: "lg:w-1/2 w-full lg:h-auto rounded bg-primary",
  rightIcon: "text-4xl absolute bottom-0 top-0 text-headingColor -left-12",
};

const CarouselImage = ({ image }) => {
  return (
    image && (
      <div className="h-full w-full">
        <Image
          width={500}
          height={500}
          className="h-full w-full"
          alt=""
          src={image}
        />
      </div>
    )
  );
};

const ArrowNext = ({ className, style, onClick }) => {
  return (
    <div
      //   className={className}
      //   style={{
      //     ...style,
      //   }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className={styles.rightIcon} />
    </div>
  );
};

const ArrowPrevious = ({ className, style, onClick }) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <IoIosArrowDropleftCircle className={styles.leftIcon} />
    </div>
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
