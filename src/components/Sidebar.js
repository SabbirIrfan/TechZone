import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, ButtonGroup, ListGroup } from "react-bootstrap";

export const Sidebar = ({ filterViewProducts }) => {
  const [filterState, setFilterState] = useState("All");
  const handleFilterStatus = (catagory) => {
    filterViewProducts(catagory);
    setFilterState(catagory);
  };
  return (
    <div >
      
      <ListGroup className="mt-4" >
      <ListGroup.Item
          onClick={() => handleFilterStatus("all")}
            >
            All Products
        </ListGroup.Item >
        <ListGroup.Item
          onClick={() => {
            handleFilterStatus("book")
          }}
        >
          Childrens Books
        </ListGroup.Item>

        <ListGroup.Item


          onClick={() => handleFilterStatus("laptop")}
        >
          Laptop
        </ListGroup.Item>


        <ListGroup.Item

          onClick={() => handleFilterStatus("keyboard")}
        >
          KeyBoard
        </ListGroup.Item >


        <ListGroup.Item

          onClick={() => handleFilterStatus("monitor")}
        >
          Monitor
        </ListGroup.Item >


        <ListGroup.Item
          onClick={() => handleFilterStatus("mouse")}
            >
            Mouse
        </ListGroup.Item >

    </ListGroup>
    </div >
  );
};
