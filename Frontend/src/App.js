import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import About from "./about/about";
import Contact from './contact/contact'; 
import Product from "./product/product";
import Add from "./add/add";
import Table from "./table/table";
import Edit from "./Edit/Edit";
import Signup from './signup/signup';
import Signin from './signin/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<Add />} />
        <Route path="/table" element={<Table />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
