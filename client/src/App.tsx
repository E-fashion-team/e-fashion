import Drops from './components/Drops';
import React,{useState}  from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import { CreatorStudioPage } from './components/CreatorStudio';
function App() {
  return (

    <BrowserRouter   >
      <NavBar/>
   
   
  <Routes>
<Route path='/about' element={<About/>}/>
<Route path='/creatorStudio' element={<CreatorStudioPage/>}/>
{/* <Route path='/' element={</>}/>
<Route path='/' element={</>}/>
<Route path='/' element={</>}/> */}
   </Routes>
 <Footer/>
    </div>

  );
}

export default App;
