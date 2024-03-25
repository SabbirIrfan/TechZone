// Home.js
import React, { useState } from 'react';
import { NavScrollExample } from './NavScrollExample'
import { Sidebar } from './Sidebar';
// import {PersistentDrawerLeft} from './SidebarMat'
import { ProductCard } from './ProductCard';
import { Data } from '../data'
const Home = () => {
  // Dummy product data for demonstration
  const [products, setData] = useState(Data);
  const [viewProducts, setViewProducts] = useState(Data);
  const [cartItem, setCartItem] = useState([]);
  const [cartSize, setCartSize] = useState(0);

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
    setCartItem([...cartItem, product]);
    setCartSize(cartItem.length+1)
    setTimeout(()=>{
      console.log(cartItem)

    },1000);

  }

  return (
    <React.Fragment>
      <NavScrollExample searchProducts={searchProducts} cartSize={cartSize} cartItem={cartItem}/>
      <div className='row'>
        <div className='col-2'>  <Sidebar filterViewProducts={filterViewProducts} /></div>
        <div className="col-10">
          <div className='row  gap-5'>
            {viewProducts.map(product => (
              <ProductCard key={product.id} handleAddCart={handleAddCart} product={product} setCartItem={setCartItem}  cartItem={cartItem} setCartSize={setCartSize}/>
            ))}
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
