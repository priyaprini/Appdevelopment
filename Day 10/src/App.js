import React, { useState } from "react";
import "./assets/css/App.css"
import Login from "./pages/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Signup from'./pages/Signup'
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import Slidebar from "./pages/Slidebar";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard3 from "./pages/Dashboard3";
import Dashboard4 from "./pages/Dashboard4";
import Dashboard5 from "./pages/Dashboard5";
import Dashboard6 from "./pages/Dashboard6";
import Dashboard7 from "./pages/Dashboard7";
import Navbar1 from "./pages/Navbar1";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
function App() {
    return(

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Dashboard2" element={<Dashboard2/>}/>
          <Route path="/Dashboard3" element={<Dashboard3/>}/>
          <Route path="/Dashboard3" element={<Dashboard3/>}/>
          <Route path="/Dashboard4" element={<Dashboard4/>}/>
          <Route path="/Dashboard5" element={<Dashboard5/>}/>
          <Route path="/Dashboard6" element={<Dashboard6/>}/>
          <Route path="/Dashboard7" element={<Dashboard7/>}/>
          <Route path="/Navbar1" element={<Navbar1/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/Slidebar" element={<Slidebar/>}/>
        </Routes>

    )
  }

export default App;
