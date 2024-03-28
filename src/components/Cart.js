import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap'; 
import { handleChange, handleRemove, handlePrice } from './Functions';
import { useCartItem, useSetCartItem,useSetCartSize } from './Xustand';

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
        <Container  className='row ms-5 mr-5 mt-4' >
          <Container  className=' ms-5 mr-5 mt-4 gap-3 col-8'  style={{ overflowY: 'auto', maxHeight: '70vh' }} >
            {cartItem?.map((item) => (
                <Card key={item.id} className="mb-3" >
                    <Card.Body className="d-flex">
                        <div className="cart_img me-3">
                            <Card.Img src={item.img} style={{ height: "5rem", width: "auto" }} />
                        </div>
                        <div className="flex-grow-1">
                            <Card.Title>{item.title}</Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-right">
                                    <Button variant="danger" onClick={() => handleChange(item, -1, setCartItem, cartItem)}>-</Button>
                                    <Button variant="light" disabled>{item.amount > 0 ? item.amount : 1}</Button>
                                    <Button variant="success" onClick={() => handleChange(item, 1, setCartItem, cartItem)}>+</Button>
                                </div>
                                <span   className='lead pl-10'>Price of {item.amount} {item.catagory} is {item.price * item.amount}</span>
                                <Button variant="danger" onClick={() => handleRemove(item.id, cartItem, setCartItem,setCartSize)}>Remove</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))}
           </Container>
           <Container className="col-3">
           <Card className='mt-4  '>
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <span>Total Price of your Cart</span>
                        <span>BDT - {price}</span>
                    </div>
                </Card.Body>
            </Card>
            </Container>
        </Container>
    );
}
