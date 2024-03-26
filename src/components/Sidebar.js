import React, { useState } from "react";
import { Button, ListGroup , Offcanvas} from "react-bootstrap";

export const Sidebar = ({ filterViewProducts }) => {
  const [filterState, setFilterState] = useState("All");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFilterStatus = (category) => {
    filterViewProducts(category);
    setFilterState(category);
  };


  return (
    <div>
 

      <Button  variant="secondery" class="navbar-toggle" onClick={handleShow}>
        Catagory
      </Button> 

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Catagory</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup className="my-sidebar mt-5
        ">
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
          onClick={() => handleFilterStatus("book")}
        >
          Children's Books
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
          Keyboard
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
        </Offcanvas.Body>
      </Offcanvas>
     
    </div>
  );
};

export default Sidebar;


