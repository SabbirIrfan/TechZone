import React, { useState, useEffect } from "react";
import { Button, ListGroup, Offcanvas, Card, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { handleChange, handleRemove, handlePrice } from "../Functions";
import { useNavigate } from "react-router-dom";
import {
  useCartItem,
  useCartSize,
  useSetCartItem,
  useSetCartSize,
} from "../store/Xustand";

export const Cartbar = ({}) => {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0); // NEEDS TO FIX

  const cartItem = useCartItem();
  const cartSize = useCartSize();
  const setCartItem = useSetCartItem();
  const setCartSize = useSetCartSize();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCartNavigation = () => {
    navigate(`/cart`);
  };
  useEffect(() => {
    handlePrice(cartItem, setPrice);
  });

  return (
    <div>
      <Button
        id="cartbar"
        style={{
          borderRadius: "60%",
          position: "relative",
          display: "inline-block",
        }}
        onClick={handleShow}
      >
        <FaShoppingCart size={24} />
        {cartSize > 0 && (
          <span
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              backgroundColor: "#49999c",
              borderRadius: "50%",
              padding: "1px 3px",
              color: "white",
              fontSize: 14,
            }}
          >
            {cartSize}
          </span>
        )}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <Container className="cart-container" style={{ maxHeight: '50rem', overflowY: 'auto' }}  > */}
          {cartItem?.map((item) => (
            <Card key={item.id}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div className="d-flex align-items-end">
                  <div className="cart_bar_img me-3">
                    <Card.Img
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "30%%",
                      }}
                      src={item.img}
                    />
                  </div>
                  <div>
                    <div className="d-flex align-items-right">
                      <Button
                        style={{
                          background: "#dae8de",
                          color: "black",
                          marginLeft: "1rem",
                        }}
                        onClick={() =>
                          handleChange(item, -1, setCartItem, cartItem)
                        }
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
                        style={{
                          background: "#dae8de",
                          color: "black",
                          marginLeft: "1rem",
                        }}
                        onClick={() =>
                          handleChange(item, 1, setCartItem, cartItem)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <span style={{ marginLeft: ".5rem" }} className="pl-10">
                      Price of {item.amount} {item.catagory} is{" "}
                      {item.price * item.amount}
                    </span>
                    <Button
                      style={{ marginLeft: "2rem" }}
                      onClick={() =>
                        handleRemove(
                          item.id,
                          cartItem,
                          setCartItem,
                          setCartSize
                        )
                      }
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}

          {/* </Container> */}
        </Offcanvas.Body>
        <Card>
          <span
            style={{
              backgroundColor: "#f5f5f5",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Total Price :  ${price}
          </span>{" "}
          <span className="align-item-right">
            {" "}
            <br></br>
            <Button
              onClick={handleCartNavigation}
              style={{
                marginLeft: ".5rem",
                borderRadius: "10%",
                position: "relative",
                display: "inline-block",
                alignItems:"right"
              }}
            >
              Checkout Now 
              {/* <FaShoppingCart size={24} />
                            {cartSize > 0 && (
                                <span
                                    style={{
                                        position: "absolute",
                                        top: -5,
                                        right: -5,
                                        backgroundColor: "#49999c",
                                        borderRadius: "50%",
                                        padding: "1px 3px",
                                        color: "white",
                                        fontSize: 14,
                                    }}
                                >
                                    {cartSize}
                                </span>
                            )} */}
            </Button>
          </span>
        </Card>
      </Offcanvas>
    </div>
  );
};
