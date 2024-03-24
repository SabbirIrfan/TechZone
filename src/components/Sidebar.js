import React from "react";
import { Button,Dropdown, DropdownButton, ButtonGroup, ListGroup } from "react-bootstrap";

export const Sidebar = () => {
  return (
    <div >
      Catagories
      <ListGroup as={"li"}>
      <ListGroup.Item as="li" disabled>
          Childrens Books
          </ListGroup.Item>
          
        <ListGroup.Item as="li" disabled>
          Laptop
          </ListGroup.Item>
          
         
        <ListGroup.Item as="li" disabled>
          KeyBoard
          </ListGroup.Item >
          
         
        <ListGroup.Item as="li" disabled>
          Monitor
          </ListGroup.Item >
          
       
        <ListGroup.Item as="li" disabled>
          Mouse
          </ListGroup.Item >
          
      </ListGroup>
    </div>
  );
};
