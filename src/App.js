import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/navbar";
import { Routes,Route, BrowserRouter } from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<About/>} path="/about"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Signup/>} path="/signup"/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
