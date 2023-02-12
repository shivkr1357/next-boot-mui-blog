import Image from "next/legacy/image";
import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

const Card = () => {
  return (
    <Fragment>
      <Image
        width={500}
        height={500}
        className="d-block w-100"
        src="/assets/post/1.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Fragment>
  );
};

export default Card;
