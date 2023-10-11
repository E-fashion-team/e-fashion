import Drops from './components/Drops';
import React,{useState}  from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import { CreatorStudioPage } from './components/CreatorStudio';
import Home from './pages/Home';
import { Stats } from './components/Statistique';
import { Market } from './components/Market';

function App() {
  return (
<div>
  
      <NavBar/>
   
   
  <Routes>
<Route path='/about' element={<About/>}/>
<Route path='/creatorStudio' element={<CreatorStudioPage/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/stats' element={<Stats/>}/>
<Route path='/market' element={<Market/>}/>
   </Routes>
 <Footer/>
 
  </div> 

  );
}

export default App;
