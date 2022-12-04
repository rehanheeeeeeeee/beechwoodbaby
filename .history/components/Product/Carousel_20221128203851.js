import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          width={1920}
          height={1080}
          className="d-block w-100"
          src="https://dummyimage.com/400x400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width={1920}
          height={1080}
          className="d-block w-100"
          src="https://dummyimage.com/400x400"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width={1920}
          height={1080}
          className="d-block w-100"
          src="https://dummyimage.com/400x400"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
