// import Drops from './components/Drops';
import React,{useState}  from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import { CreatorStudioPage } from './components/CreatorStudio';
import Home from './pages/Home';
import { Stats } from './components/Statistique';
import { Market } from './components/Market';

import ExplorePage from './components/explorePqge/explore';
import EditProfile from './components/editProfile/editProfile';
import Drops from './components/Drops';
import ClientCard from './components/ClientCard';
function App() {

/////////////////3////////


  return (
<div>
  
      <NavBar/>
  <Routes>
  <Route path="/market"      element={<Market/>}/> 
  <Route path="/home"      element={<Home/>}/> 
<Route  path="/explore"  element={<ExplorePage/>}  />
 <Route path="/edit" element={< EditProfile/>}/> 
<Route path="/about" element={< About/>}/>
<Route path="/studio"   element={< CreatorStudioPage/>} />
<Route path='/stats' element={<Stats />}/>
<Route path='/drops' element={<Drops />}/>
<Route path='/clientCard' element={<ClientCard />}/>
  </Routes> 
   <Footer/>
 </div>

  );
}

export default App;
