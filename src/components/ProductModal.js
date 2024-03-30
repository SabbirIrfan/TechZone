import { Radio } from '@mui/material';
import { useState } from 'react';
import {Button, Modal, NavDropdown, Card} from 'react-bootstrap';
import {renderRatingStars} from './Functions'


export const ProductModal = ({show,setShow,handleAddCart, product}) => {
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Card className='col-lg-12 my-card col-md-5 col-10'>
      <div className="row g-0">
        {/* Product Image */}
        <div className="col-md-4">
          <Card.Img className='my-card-image' variant="top" src={product.img} />
        </div>
        {/* Product Details */}
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className='mt-auto'>{product.author}</Card.Text>
            <Card.Text>{product.desc}</Card.Text>
            <div className="d-flex align-items-center">
              {/* Rating Stars */}
              <div className="me-auto">{renderRatingStars(product.rating)}</div>
              {/* Product Price */}
              <div className="ms-auto">Price: ${product.price}</div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  

          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
                  <Button variant="primary" onClick={() => handleAddCart(product)}>Add To Cart</Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};
