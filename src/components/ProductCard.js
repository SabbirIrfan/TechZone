import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

export const ProductCard = ({ product,handleAddCart }) => {
 

  return (
    <Card className='col-3' style={{ marginTop: "1.5rem" }}>
      <Image variant="top" style={{ height: "60%" }} thumbnail fluid src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text className='mt-auto'>{product.author}</Card.Text>
        <Card.Text className='mt-auto'>{product.catagory}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Price: ${product.price}</Card.Text>
        {/* Pass the product object to handleAddCart function */}
        <Button variant="primary" onClick={() => handleAddCart(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
  );
}