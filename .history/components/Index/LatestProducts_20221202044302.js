import React from "react";
import Product from "../Products/Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const styles = {
  container: "py-12 px-10 md:pl-20 w-full",
  heading: "w-full text-left font-semibold text-3xl",
  wrapper:
    "py-6 flex items-center justify-start w-full overflow-x-scroll scroll-smooth scrollbar-hide",
};

export default function LatestProducts({ latestProducts }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {latestProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Carousel>
    // <div className={styles.container}>
    //   <p className={styles.heading}>Our Latest Products</p>
    //   <div className={styles.wrapper}>

    //   </div>
    // </div>
  );
}
