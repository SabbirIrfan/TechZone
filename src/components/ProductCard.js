import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

export const ProductCard = ({ product,handleAddCart }) => {
 

  return (
    <Card className='col-lg-2  my-card col-md-5 col-10' style={{ }}>
      <Card.Img  className='my-card-image' variant="top" style={{ height: "13rem" }} thumbnail fluid src={product.img} />
      <Card.Body style={{maxHeight:"10rem"}}>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text style={{overflowY: "auto" , maxHeight:"4rem"}}>
          {product.desc}
        </Card.Text> */}
        <Card.Text className='mt-auto'>{product.author}</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Card.Text className='mt-auto'>{product.catagory}</Card.Text>

        <Card.Text>Price: ${product.price}</Card.Text>
        {/* Pass the product object to handleAddCart function */}
        <Button variant="primary" onClick={() => handleAddCart(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
  );
}