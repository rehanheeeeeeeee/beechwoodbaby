import bootstrap from "bootstrap";
import Image from "next/image";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/List'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            width={1920}
            height={1080}
            src="https://dummyimage.com/720x400"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <Image
            width={1920}
            height={1080}
            src=".https://dummyimage.com/720x400"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <Image
            width={1920}
            height={1080}
            src="https://dummyimage.com/720x400"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
