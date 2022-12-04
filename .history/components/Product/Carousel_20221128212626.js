import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const styles = {
  slider: "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
};

export default function Carousel() {
  let settings = {
    dota: true,
  };
  return <Slider className={styles.slider}></Slider>;
}
