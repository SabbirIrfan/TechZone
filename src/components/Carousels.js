import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CarouselImage} from './CarouselImage';

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage imageNo={1} text="First slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageNo={2} text="Second slide" />
      
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageNo={3} text="Third slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageNo={4} text="Third slide" />
        
      </Carousel.Item>
    </Carousel>
  );
}

