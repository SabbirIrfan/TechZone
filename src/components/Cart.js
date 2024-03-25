import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap'; 
export const Cart = () => {
    const [price, setPrice] = useState(0);
    const location = useLocation();
    const [cartItem,setCartItem] = useState(location.state.items)

    const handleChange = (increaseItem, value) => {
        if(increaseItem.amount===1 && value === -1) return ;
       const newCartItem =  cartItem.map((item) => {
            if (item.id === increaseItem.id) {
              item.amount += value;
            }
            return item; // Return the modified item
          })  

          setCartItem(newCartItem);
         
      } 
      

    const handlePrice = () => {
        let ans = 0;
        cartItem.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cartItem.filter((item) => item.id !== id);
        setCartItem(arr);
        // handlePrice(); 
    }

    useEffect(() => {
        handlePrice();
    })

    return ( 
        <Container className='row gap-3'>
          {cartItem?.map((item) => (
            <Card key={item.id} className="mb-3 col-4">
              <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <div className="d-flex align-items-end">
                  <div className="cart_img me-3">
                    <Card.Img src={item.img} />
                  </div>
                  <div>
                   
                    <div className="d-flex align-items-right">
                      <Button variant="danger" onClick={() => handleChange(item, -1)}>-</Button>
                      <Button variant="light" disabled>{item.amount > 0 ? item.amount : 1}</Button>
                      <Button variant="success" onClick={() => handleChange(item, 1)}>+</Button>
                    </div>
                      <span className='pl-10'>Price of {item.amount} {item.catagory} is {item.price * item.amount}</span>
                      <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                    </div>
                
                </div>
              </Card.Body>
            </Card>
          ))}
          <Card >
            <span>Total Price of your Cart</span>
            <span className='align-item-right'>BDT - {price}</span>
          </Card>
        </Container>
      );
}

 