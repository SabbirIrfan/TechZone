// Home.js
import React from 'react';
import { NavScrollExample } from './NavScrollExample'
import { Sidebar } from './Sidebar';
import { ProductCard } from './ProductCard';
import { list } from '../data'
const Home = () => {
  // Dummy product data for demonstration
  const products = list

  return (
    <React.Fragment>
      <NavScrollExample />

      <div className='row'>
        <div className='col-2'>  <Sidebar /></div>

        <div className="col-10">

          <div className='row ms-5 gap-5'>


          
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
