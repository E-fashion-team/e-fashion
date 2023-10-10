import Drops from './components/Drops';
import React,{useState}  from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import ExplorePage from "./components/explorePqge/explore"
import Home  from "./pages/Home"
import EditProfile from './components/editProfile/editProfile'

function App() {
  return (

    <BrowserRouter   >
      <NavBar/>
   
   
  <Routes>
    <Route path="/home"      element={<Home/>}/> 
<Route  path="/explore"  element={<ExplorePage/>}  />
<Route path='/edit' element={< EditProfile/>}/>


  </Routes> 
   <Footer/>
   </BrowserRouter>

  );
}

export default App;
