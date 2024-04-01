import React, { useState,useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Container, Form, Col } from "react-bootstrap";
import { handleChange, handleRemove, handlePrice } from "./Functions";
import { useCartItem, useSetCartItem, useSetCartSize } from "./Xustand";
import { NavScrollExample } from "./NavScrollExample";
import { FormModal } from "./Modal";
import {InvoiceModal} from "./InvoiceModal"
import CartItem from "./CartItem"

export const Cart = () => {
  const [price, setPrice] = useState(0);
  const location = useLocation("");
  const cartItem = useCartItem("");
  const setCartItem = useSetCartItem("");
  const setCartSize = useSetCartSize("");

  useEffect(() => {
    handlePrice(cartItem, setPrice);
  }, [cartItem]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    setCartSize(cart.length);
    setCartItem(cart);
  }, []);
  const [name,setName] = useState();
  const [address,setAddress] = useState();
  const [email,setEmail] = useState();
  const [phoneNumber,setPhoneNumber] = useState();
  const orderForm = {
    name: name,
    address:address,
    email:email,
    phoneNumber:phoneNumber
  }
 
  return (
    <>
      <Container fluid>
        <NavScrollExample showCatagorycatagory={false}></NavScrollExample>
      </Container>
      <Container fluid className="row" style={{ paddingTop: "5rem" }}>

        <CartItem cartItem={cartItem} handleChange={handleChange} handleRemove={handleRemove} setCartItem={setCartItem} setCartSize={setCartSize} />

        <div
          xs={12}
          md={6}
          className="col-lg-3  col-md-12 col-12"
          style={{
            marginTop: "0rem",
            overflowY: "auto",
          }}
        >
          <Card className="mt-4">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email"  onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address"  onChange={(event) => setAddress(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    onChange={(event) => setPhoneNumber(event.target.value)} 
                  />
                </Form.Group>
                <InvoiceModal cartItem={cartItem} setCartItem={setCartItem} orderForm={orderForm} />

              </Form>
            </Card.Body>
          </Card>

          {/* Total Price */}
          <Card className="mt-4">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <span>Total Price of your Cart</span>
                <span>$ - {price}</span>
              </div>
            </Card.Body>
          </Card>
        </div>
        <FormModal cartItem={cartItem} setCartItem={setCartItem} />

        {/* <button onClick={downloadPDF}>Download PDF</button> */}
      </Container>
    </>
  );
};
