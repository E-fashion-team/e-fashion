// import Drops from './components/Drops';
import React,{useState}  from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import ExplorePage from "./components/explorePqge/explore"
import Home  from "./pages/Home"
import EditProfile from './components/editProfile/editProfile'
import About from './components/About'
import {CreatorStudioPage} from './components/CreatorStudio'
import Market from "./components/market/market"

function App() {




  return (

    <BrowserRouter   >
      <NavBar/>
   
   
  <Routes>
   

  <Route path="/market"      element={<Market/>}/> 
  <Route path="/home"      element={<Home/>}/> 
<Route  path="/explore"  element={<ExplorePage/>}  />
 <Route path="/edit" element={< EditProfile/>}/> 
<Route path="/about" element={< About/>}/>
<Route path="/studio"   element={< CreatorStudioPage/>} />

  </Routes> 
   <Footer/>
   </BrowserRouter>

  );
}

export default App;
