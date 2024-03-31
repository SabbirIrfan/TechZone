import React, { useEffect, useState } from "react";
import { Button, ListGroup , Navbar, Offcanvas} from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import {useViewProducts,useSetViewProducts, useProducts, useCategory, useSetCategory} from './Xustand'
export const Sidebar = ({ filterViewProducts }) => {
  const [filterState, setFilterState] = useState("all");
  const [show, setShow] = useState(false);
  const [priceRange, setPriceRange] = useState(1000); // Initial price range values
  const category = useCategory();
  const setCategory = useSetCategory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const products = useProducts();
  const setViewProducts = useSetViewProducts();

  useEffect(()=>{
    handleViewProductChange();

  },[priceRange])
  const handleFilterStatus = (category) => {
    filterViewProducts(category);
    setFilterState(category);
  };


  const handlePriceRangeChange = (event) => {
    setPriceRange([event.target.value]);
  };

  const handleViewProductChange = () => {
    const filteredProducts = products.filter((product) => {
      if(filterState === 'all'){
      return product.price <= priceRange ;
      }else{
        return product.price <= priceRange && product.category === filterState;
      }
    });
    
    console.log(priceRange)
    // Update the filtered products in state
    setViewProducts(filteredProducts);
  };

 const handleInputPriceRange = (e)=>{
    setPriceRange([e.target.value])
  }
  return (
    <div>
      <Button id="category" aria-label="Toggle navigation" onClick={handleShow}>
        <span class="navbar-toggler-icon"> </span> Catagory
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="my-sidebar mt-5">
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
            <ListGroup.Item>
              <RangeSlider
              className="rangeslider"
                value={priceRange}
                onChange={handlePriceRangeChange}
                min={2}
                max={10000}
                step={5}
              >
                
              </RangeSlider>
              <div >Price Range:  <input style={{width:"5rem"}}  onChange={handleInputPriceRange} value={priceRange}/></div>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
