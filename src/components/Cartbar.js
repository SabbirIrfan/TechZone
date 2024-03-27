import React, { useState, useEffect } from "react";
import { Button, ListGroup, Offcanvas, Card, Container } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { handleChange, handleRemove, handlePrice } from './Functions'


export const Cartbar = ({ cartSize, cartItem, setCartItem, setCartSize }) => {
    //   const [filterState, setFilterState] = useState("All");
    const [show, setShow] = useState(false);
    const [price, setPrice] = useState(0); // NEEDS TO FIX 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handlePrice(cartItem, setPrice);
    })

    //   const handleFilterStatus = (category) => {
    //     filterViewProducts(category);
    //     setFilterState(category);
    //   };


    return (
        <div>


{/* 
            <Button variant="secondery" class="navbar-toggle" onClick={handleShow}>
                <span>
                    {cartSize > 0 &&
                        <span className="row">
                            <span style={{ width: "5rem", marginLeft: "1rem", borderRadius: "1rem", width: "4rem" }}><FaCartPlus /></span>
                            <span style={{ borderRadius: "1rem", marginBottom: "1rem" }} className="badge"> {cartSize}</span>
                        </span>}



                </span>

            </Button> */}


            <Button variant="" style={{ borderRadius:"60%" , position: "relative", display: "inline-block" }} onClick={handleShow}>
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
            <Offcanvas show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart Items</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    {/* <Container className="cart-container" style={{ maxHeight: '50rem', overflowY: 'auto' }}  > */}
                    {cartItem?.map((item) => (
                        <Card key={item.id} >
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <div className="d-flex align-items-end">
                                    <div className="cart_bar_img me-3">
                                        <Card.Img style={{height:"100px",borderRadius:"50%"}} src={item.img} />
                                    </div>
                                    <div>

                                        <div className="d-flex align-items-right">
                                            <Button style={{ background: "#dae8de", color: "black" ,marginLeft:"1rem"}} onClick={() => handleChange(item, -1, setCartItem, cartItem)}>-</Button>
                                            <Button style={{marginLeft:"1rem"}} variant="light" disabled>{item.amount > 0 ? item.amount : 1}</Button>
                                            <Button style={{ background: "#dae8de", color: "black" , marginLeft:"1rem" }} onClick={() => handleChange(item, 1, setCartItem, cartItem)}>+</Button>
                                        </div>
                                        <span style={{marginLeft:".5rem"}} className='pl-10'>Price of {item.amount} {item.catagory} is {item.price * item.amount}</span>
                                        <Button style={{marginLeft:"2rem"}} onClick={() => handleRemove(item.id, cartItem, setCartItem, setCartSize)}>Remove</Button>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    ))}

                    {/* </Container> */}
                </Offcanvas.Body>
                <Card  >
                    <span style={{backgroundColor:"#f5f5f5"}}>Total Price of your Cart  BDT - {price}</span>
                    <span className='align-item-right'> <br></br> 
                    Checkout Now --- 
            <Button  style={{marginLeft:"2rem", borderRadius:"60%" , position: "relative", display: "inline-block" }} onClick={handleShow}>
                
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
                    </span>
                </Card>
            </Offcanvas>

        </div>
    );
};




