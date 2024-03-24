// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import {Cart} from 

const App = () => {
  return (
    <Routes>

      <Route path='/' element={ <Home/>}>
       
      </Route>
    </Routes>
  );
};

export default App;
