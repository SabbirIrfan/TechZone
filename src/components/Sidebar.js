import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  ListGroup,
} from "react-bootstrap";

export const Sidebar = ({ filterViewProducts }) => {
  const [filterState, setFilterState] = useState("All");
  const handleFilterStatus = (catagory) => {
    filterViewProducts(catagory);
    setFilterState(catagory);
  };

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
  }
  return (
    <div>
      <ListGroup
        className="my-sidebar mt-4"
       
      >
        <ListGroup.Item
          className="mb-2"
          style={{ cursor: "pointer" }}
          onClick={() => handleFilterStatus("all")}
        >
          All Products
        </ListGroup.Item>
        <ListGroup.Item
          className="mb-2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleFilterStatus("book");
          }}
        >
          Childrens Books
        </ListGroup.Item>

        <ListGroup.Item
          className="mb-2"
          style={{ cursor: "pointer" }}
          onClick={() => handleFilterStatus("laptop")}
        >
          Laptop
        </ListGroup.Item>

        <ListGroup.Item
          className="mb-2"
          style={{ cursor: "pointer" }}
          onClick={() => handleFilterStatus("keyboard")}
        >
          KeyBoard
        </ListGroup.Item>

        <ListGroup.Item
          className="mb-2"
          style={{ cursor: "pointer" }}
          onClick={() => handleFilterStatus("monitor")}
        >
          Monitor
        </ListGroup.Item>

        <ListGroup.Item
          className="mb-2"
          style={{ cursor: "pointer" }}
          onClick={() => handleFilterStatus("mouse")}
        >
          Mouse
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
