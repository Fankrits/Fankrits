import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index1.jsx";
import Home from "./components/Home/index1.jsx";
import About from "./components/About";
import Footer from "./components/Footer";
import Video from "./components/Hobby/Videoedit";
import Appsheet from "./components/Hobby/Appsheet/index1.jsx";
import Web from "./components/Hobby/Web";
import VRJTD from "./components/VRJTD";
import Thesis from "./components/Thesis/index1.jsx";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Hobby/Appsheet" element={<Appsheet />} />
        <Route path="/Hobby/Videoedit" element={<Video />} />
        <Route path="/Hobby/Web" element={<Web />} />
        <Route path="/VRJTD" element={<VRJTD />} />
        <Route path="/Thesis" element={<Thesis />} />
        <Route path="/Form" element={<Form />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
