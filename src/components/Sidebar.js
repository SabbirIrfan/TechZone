import React from 'react';import Dropdown from 'react-bootstrap/Dropdown';


export const Sidebar = () => {
  return (
    <div>
      Catagories
      <ul className='list-unstyled ps-0'>
        <li className='mb-1'>
          <button className='btn btn-toggle align-items-center rounded collapsed' data-bs-toggle='collapse'>
                Catagorie One
          </button>
          <div className='collapse show' id='home-collapse'>
            <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small' >
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};


