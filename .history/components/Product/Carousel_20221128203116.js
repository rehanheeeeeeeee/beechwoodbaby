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
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
