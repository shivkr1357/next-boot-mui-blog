import Image from "next/legacy/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imageList } from "@/config/index";
import { Fragment } from "react";

const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style m-5"
      itemClass="carousel-item-padding-40-px">
      {imageList.map((item, key) => {
        return (
          <Fragment key={key}>
            <Image
              key={key}
              width={300}
              height={300}
              src={item.src}
              alt={item.alt}
            />
            <h3>{item.caption}</h3>
          </Fragment>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
