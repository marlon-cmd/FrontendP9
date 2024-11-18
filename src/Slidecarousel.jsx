import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slidecarousel() {
  return (
    <Carousel  className="d-flex flex-column align-items-center" style={{ width: '50%', height: '40%', marginTop: '70px', objectFit: 'cover', marginLeft: '500px'  }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=First+Image"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Image</h3>
          <p>Description for the first image.</p> 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+Image"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Image</h3>
          <p>Description for the second image.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+Image"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Image</h3>
          <p>Description for the third image.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidecarousel;
