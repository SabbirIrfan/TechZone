import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ProductModal } from './ProductModal';
import {renderRatingStars} from './Functions'
export const ProductCard = ({ product, handleAddCart }) => {
  const [show, setShow] = useState(false);


  const showDetail = () => {
    setShow(true); // Set show to true to display the modal
  };

  return (
    <>
      <Card className='col-lg-2 my-card col-md-5 col-10' >
        <Card.Img className='my-card-image' variant="top" style={{ height: "13rem" , cursor:"pointer"}} thumbnail fluid src={product.img} onClick={showDetail} />
        <Card.Body style={{ maxHeight: "10rem" , cursor:"pointer"}} onClick={showDetail}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className='mt-auto'>{product.author}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {renderRatingStars(product.rating)}
          <Card.Text>Price: ${product.price}</Card.Text>
          <Button variant="primary" onClick={() => handleAddCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
      <ProductModal show={show} setShow={setShow} handleAddCart={handleAddCart} product={product} />
    </>
  );
};
