import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Container, Form, Col } from "react-bootstrap";
import { handleChange, handleRemove, handlePrice } from "./Functions";
import { useCartItem, useSetCartItem, useSetCartSize } from "./Xustand";
import { NavScrollExample } from "./NavScrollExample";
import { FormModal } from "./Modal";
export const Cart = () => {
  const [price, setPrice] = useState(0);
  const location = useLocation();
  const cartItem = useCartItem();
  const setCartItem = useSetCartItem();
  const setCartSize = useSetCartSize();

  useEffect(() => {
    handlePrice(cartItem, setPrice);
  }, [cartItem]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    setCartSize(cart.length);
    setCartItem(cart);
  }, []);

  return (
    <>
      <NavScrollExample showCatagorycatagory={false}></NavScrollExample>
      <div className="cart">
        <Col
          className="d-flex gap-5 ms-5 mr-5"
          style={{ marginTop: "5rem", maxHeight: "87vh", width: "95vw" }}
        >
          {/* Left Side - Display Cart Items */}
          <Col
            xs={12}
            md={6}
            style={{
              overflowY: "auto",
              maxHeight: "90vh",
              minWidth: "50vw",
              marginLeft: "5vw",
              marginTop: "1.5rem",

            }}
          >
            {cartItem?.map((item) => (
              <Card key={item.id} className="mb-3">
                <Card.Body className="d-flex">
                  <div className="cart_img me-3">
                    <Card.Img
                      src={item.img}
                      style={{ height: "5rem", width: "auto" }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <Card.Title>{item.title}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="lead pl-10">
                        Price of {item.amount} {item.catagory} is{" "}
                        {item.price * item.amount}
                      </span>
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
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* Right Side - User Info Form and Total Price */}
          <Col
            xs={12}
            md={6}
            style={{
              marginTop: "0rem",
              overflowY: "auto",
              minHeight: "auto",
              maxWidth: "30vw",
            }}
          >
            <Card className="mt-4">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>
                  <FormModal />
                </Form>
              </Card.Body>
            </Card>

            {/* Total Price */}
            <Card className="mt-4">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <span>Total Price of your Cart</span>
                  <span>BDT - {price}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </div>
    </>
  );
};
