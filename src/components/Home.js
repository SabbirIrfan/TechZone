// Home.js
import React, {useEffect } from 'react';

import { NavbarComponent } from './NavbarComponent'

import { ProductCard } from './product/ProductCard';
import { ControlledCarousel } from './Carousels';
import {searchProducts} from './Functions';
import { useCartItem, useCartSize, useSetCartItem, useSetCartSize ,useProducts,useViewProducts,useSetViewProducts} from './store/Xustand';

const Home = () => {
  const products = useProducts();
  const viewProducts = useViewProducts();
  const setViewProducts = useSetViewProducts();
  const cartItem = useCartItem();
  const cartSize = useCartSize();
  const setCartItem = useSetCartItem();
  const setCartSize = useSetCartSize();
  useEffect(() => {
    if(!localStorage.getItem("cart")) localStorage.setItem("cart",JSON.stringify([]));
    let x = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [];
    setCartItem(x)
    setCartSize(x.length)
  },[]);

  const filterViewProducts = (category) => {
    if (category === "book") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.category === "book"
        )
      )
      console.log(viewProducts);
    } else if (category === "laptop") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.category === "laptop"
        )
      )
    } else if (category === "keyboard") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.category === "keyboard"
        )
      )
    } else if (category === "mouse") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.category === "mouse"
        )
      )
    }
    else if (category === "monitor") {
      setViewProducts(
        products.filter(
          (viewProducts) => viewProducts.category === "monitor"
        )
      )
    } else if (category === "all") {
      setViewProducts(
        products
      )
    }
  };


  const handleAddCart = (product) => {
    // Copy the existing cart items array and append the new product to it
    console.log(cartItem)

    const exist = cartItem.filter((item) => item.id === product.id)
    if (exist.length > 0) {
      console.log("item already added to cart")
      return;
    }
    setCartItem([...cartItem, product]);
    localStorage.setItem("cart", JSON.stringify([...cartItem, product]))
    setCartSize(cartItem.length + 1)


  }

  return (
    <React.Fragment>
      <NavbarComponent showCatagory={true} searchProducts={searchProducts} cartSize={cartSize} cartItem={cartItem} setCartSize={setCartSize} filterViewProducts={filterViewProducts} setCartItem={setCartItem} />
      <div className='row'>

        <div className="col-12">
          <div className='col-12' style={{ height: "25rem" }}>
            <ControlledCarousel />
          </div>

          <div className='row  gap-5' style={{ marginTop: "5.8rem", marginLeft: "5rem" }}>
            {viewProducts.map(product => (
              <ProductCard key={product.id} handleAddCart={handleAddCart} product={product} setCartItem={setCartItem} cartItem={cartItem} setCartSize={setCartSize} />
            ))}
          </div>

        </div>
      </div>

    </React.Fragment>
  );
};

export default Home;
