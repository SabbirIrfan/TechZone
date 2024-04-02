import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShowCartItem = ({ item, handleChange, handleRemove ,setCartItem,cartItem,setCartSize}) => (
    
  <Card className="mb-3">
    <Card.Body className="d-flex">
      <div className="cart-img me-3">
        <Card.Img src={item.img} style={{ height: "5rem", width: "auto" }} />
      </div>
      <div className="flex-grow-1">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <Card.Title>{item.title}</Card.Title>
            <span className="lead">
              Price of {item.amount} {item.catagory} is{' '}
              {item.price * item.amount}
            </span>
          </div>
          <div className="d-flex align-items-center mt-3 mt-md-0">
            <Button
              style={{ background: "#dae8de", color: "black", marginLeft: "1rem" }}
              onClick={() => handleChange(item, -1, setCartItem, cartItem)}
            >
              -
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              variant="light"
              disabled
            >
              {item.amount > 0 ? item.amount : 1}
            </Button>
            <Button
              style={{ background: "#dae8de", color: "black", marginLeft: "1rem" }}
              onClick={() => handleChange(item, 1, setCartItem, cartItem)}
            >
              +
            </Button>
            <Button
            className="ms-3"
            onClick={() => handleRemove(item.id,cartItem,setCartItem,setCartSize)}
          >
            Remove
          </Button>
          </div>
        </div>
      
      </div>
    </Card.Body>
  </Card>
);

const CartItem = ({ cartItem, handleChange, handleRemove , setCartItem, setCartSize}) => (
  <div className="col-lg-8 col-md-12 col-12">
    {cartItem?.map(item => (
      <ShowCartItem
        key={item.id}
        item={item}
        handleChange={handleChange}
        handleRemove={handleRemove}
        setCartItem={setCartItem}
        cartItem={cartItem}
        setCartSize={setCartSize}
      />
    ))}
  </div>
);

export default CartItem;
