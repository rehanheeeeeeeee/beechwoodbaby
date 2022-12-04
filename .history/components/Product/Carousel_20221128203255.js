import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          width={1920}
          height={1080}
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="https://dummyimage.com/400x400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="https://dummyimage.com/400x400"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="https://dummyimage.com/400x400"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
