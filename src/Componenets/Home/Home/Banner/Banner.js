import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../../src/Componenets/Images/Banner1.jpg';
import banner2 from '../../../../../src/Componenets/Images/Banner2.jpg';
import banner3 from '../../../../../src/Componenets/Images/Banner3.jpg';

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="fw-bold">Lets Go NOW</h1>
      <h5>Travel is the only thing you buy that makes you richer.A journey of a thousand miles begins with a single step.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 className="fw-bold">Explore and TRAVEL MORE</h1>
      <h5>Traveling – it leaves you speechless, then turns you into a storyteller</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="fw-bold">Take only memories, leave only footprints </h1>
      <h5>Wherever you go becomes a part of you somehow</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;