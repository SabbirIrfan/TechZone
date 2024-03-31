import { Radio } from "@mui/material";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavDropdown from "react-bootstrap/NavDropdown";
import { KeyShortcut } from "./KeyboardShortcut";
import {useNavigate } from "react-router-dom";

export const FormModal = ({cartItem, setCartItem}) => {
  const [show, setShow] = useState(false);
const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate('/');
    // cartItem = [];
    setCartItem([]);
    localStorage.setItem("cart", JSON.stringify([]));


  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Forward to Payment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placement</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          Your Order Has been Placed
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lets Buy Some More
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
