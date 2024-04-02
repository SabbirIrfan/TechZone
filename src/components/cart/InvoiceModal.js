import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from './invoice';
import { FormModal } from "../Modal";
export const InvoiceModal = ({ cartItem, setCartItem, orderForm }) => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => {
        setShow(false);
        // navigate('/');
        // cartItem = [];
        // setCartItem([]);
        localStorage.setItem("cart", JSON.stringify([]));


    };
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                DownLoad Invoice
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Placement</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <Invoice cartItems={cartItem} orderForm={orderForm} />
                    </PDFViewer>
                </Modal.Body>
                <Modal.Footer>
                    <FormModal cartItem={cartItem} orderForm={orderForm} setCartItem={setCartItem} />

                </Modal.Footer>
            </Modal>
        </>
    );
};
