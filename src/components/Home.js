// Home.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavScrollExample } from './NavScrollExample'
import { Sidebar } from './Sidebar';
// import {PersistentDrawerLeft} from './SidebarMat'
import { ProductCard } from './ProductCard';
import { Data } from '../data'
import { Toast } from 'react-bootstrap';
import { ControlledCarousel } from './Carousels';
import { useStore } from './Xustand'
import { useCartItem, useCartSize, useSetCartItem, useSetCartSize } from './Xustand';

const Home = () => {
  // Dummy product data for demonstration
  const [products, setData] = useState(Data);
  const [viewProducts, setViewProducts] = useState(Data);
  // const [cartItem, setCartItem] = useState([]);
  const cartItem = useCartItem();
  const cartSize = useCartSize();
  const setCartItem = useSetCartItem();
  const setCartSize = useSetCartSize();


   const filterViewProducts = (catagory) => {
    if (catagory === "book") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.catagory === "book"
        )
      )
      console.log(viewProducts);
    } else if (catagory === "laptop") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.catagory === "laptop"
        )
      )
    } else if (catagory === "keyboard") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.catagory === "keyboard"
        )
      )
    } else if (catagory === "mouse") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.catagory === "mouse"
        )
      )
    }
    else if (catagory === "monitor") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.catagory === "monitor"
        )
      )
    } else if (catagory === "all") {
      setViewProducts(
        products
      )
    }
  };


  const searchProducts = (searchWith) => {
    console.log(searchWith + searchWith.length);
    let searchedNotes = products.filter(
      (product) =>
      product.title.toLowerCase().includes(searchWith.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchWith.toLowerCase()) ||
      product.catagory.toLowerCase().includes(searchWith.toLowerCase())

    );


    if (searchWith.length === 0) {
      setViewProducts(products);
    } else setViewProducts(searchedNotes);
  };


  const handleAddCart = (product) => {
    // Copy the existing cart items array and append the new product to it
    console.log(cartItem)
    const exist =  cartItem.filter((item)=> item.id === product.id)
    if( exist.length > 0 ) {
      console.log("item already added to cart")
      return;
    }
    setCartItem([...cartItem, product]);
    setCartSize(cartItem.length+1)
    

  }

  return (
    <React.Fragment>
      <NavScrollExample searchProducts={searchProducts} cartSize={cartSize} cartItem={cartItem} setCartSize={setCartSize}  filterViewProducts={filterViewProducts} setCartItem={setCartItem}/>
      <div className='row'>
       
        {/* <div className='col-2 pt-5 mt-5' >  <Sidebar filterViewProducts={filterViewProducts} /></div> */}
        <div className="col-12">
          <div className='col-12' style={{height:"25rem"}}> 
            <ControlledCarousel />
          </div>
          
          <div className='row  gap-5' style={{marginTop:"5.8rem", marginLeft:"5rem"}}>
            {viewProducts.map(product => (
              <ProductCard key={product.id} handleAddCart={handleAddCart} product={product} setCartItem={setCartItem}  cartItem={cartItem} setCartSize={setCartSize} />
            ))}
          </div>

        </div>
      </div>
      
    </React.Fragment>
  );
};

export default Home;
