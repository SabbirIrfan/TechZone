import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {carouselImage} from '../data/images/carouselImage';
import { Image } from 'react-bootstrap'
export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images = [...carouselImage]
  return (
    <Carousel fluid activeIndex={index} onSelect={handleSelect}>
    {images.map((image) => (
      <Carousel.Item >
        <div className='container'>
        <Image src={image.image} className='my-carousel-image img' fluid style={{ width: "100%" }} />
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
  );
}

