import React from "react";
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Video from './components/Hobby/Videoedit';
import Appsheet from './components/Hobby/Appsheet';
import Web from './components/Hobby/Web';
import VRJTD from './components/VRJTD';
import Thesis from './components/Thesis';

function App() {
  

  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Hobby/Appsheet" element={<Appsheet />} />
        <Route path="/Hobby/Videoedit" element={<Video />} />
        <Route path="/Hobby/Web" element={<Web />} />
        <Route path="/VRJTD" element={<VRJTD />} />
        <Route path="/Thesis" element={<Thesis />} />
      </Routes>
    
    <Footer/>
    </>
  )  
    
}


export default App
