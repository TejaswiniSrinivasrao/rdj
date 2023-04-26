import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerSlider = ({ images, height }) => {
  const imageHeight = height || '550px';

  return (
    <Carousel interval={1500} slide={1000}>
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <img
            className='d-block w-100'
            style={{ height: imageHeight }}
            src={image.url}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerSlider;
