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
  icon: "text-4xl m-5 text-headingColor absolute hover:text-textColor transtion-all ease-in duration-100",
};

const CarouselImage = ({ image }) => {
  return (
    image && (
      <div className="h-full w-full">
        <Image
          width={500}
          height={500}
          className="object-contain shadow-lg"
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
      className="absolute -right-[24px] top-[178px]"
      style={{ margin: "25px" }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className={styles.icon} />
    </div>
  );
};

const ArrowPrevious = ({ className, style, onClick }) => {
  return (
    <div
      className="absolute right-[444px] top-[178px]"
      style={{ margin: "25px" }}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className={styles.icon} />
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
    autoplat: true,
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
