import React from 'react'
import { Image } from 'react-bootstrap'
export const CarouselImage = ({imageNo}) => {
  let src = ""
  switch (imageNo) {
    case 1:
      src = "https://www.ryans.com/storage/sliders/mobile/02-Main-Slide2_1711338787.webp"
      break;
    case 2:
      src = "https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal-ramadan-home-banner-982x500.png"

      break;
    case 3:
      src = "https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg"

      break;
    case 4:
      src = ""
      break;
    default :
      src= "https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal-ramadan-home-banner-982x500.png"
      break;
  }
  return (
    <div className='container'>
     
      <Image src={src}  className='my-carousel-image img' fluid style={{width:"fit"}} />
          

    </div>

  )
}
