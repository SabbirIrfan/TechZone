import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Cartbar } from "./Cartbar";
import { useStore } from "./Xustand";
import { searchProducts } from "./Functions";
import {
  useCartItem,
  useCartSize,
  useSetCartItem,
  useSetCartSize,
  useProducts,
  useSetViewProducts,
} from "./Xustand";

export const NavScrollExample = ({ filterViewProducts }) => {
  const [price, setPrice] = useState(0);
  const cartItem = useCartItem();
  const cartSize = useCartSize;
  const products = useProducts();
  const setViewProducts = useSetViewProducts();
  const setCartItem = useSetCartItem();
  const setCartSize = useSetCartSize();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    searchProducts(e.target.value, products, setViewProducts);
  };

  const handleCartNavigation = () => {
    navigate(`/cart`, { state: { items: cartItem } });
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        position: "fixed",

        padding: "20px",
        zIndex: "1000",
        width: "100%",
      }}
    >
      <Container fluid>
        <div className="sidebar-catagory">
          <Sidebar  filterViewProducts={filterViewProducts} />
        </div>
        <Navbar.Brand href="/">TechZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              onChange={handleSearch}
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success" onClick={handleCartNavigation}>
              <span>
                <div className="cart-icon-container">
                  {cartSize > 0 && <span className="badge">{cartSize}</span>}

                  <FaCartPlus />
                  
                </div>
              </span>

            </Button> */}

            <Cartbar
              cartSize={cartSize}
              handleCartNavigation={handleCartNavigation}
              cartItem={cartItem}
              setPrice={setPrice}
              setCartItem={setCartItem}
              setCartSize={setCartSize}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
