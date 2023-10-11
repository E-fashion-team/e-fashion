// import Drops from './components/Drops';
import React,{useState}  from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from 'axios'
import About from './components/About';
import { CreatorStudioPage } from './components/CreatorStudio';
import Home from './pages/Home';
import { Stats } from './components/Statistique';


import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import FashionShow from "./components/fashion show/fashionShow"

import { Market } from './components/Market';

import ExplorePage from './components/explorePqge/explore';
import EditProfile from './components/editProfile/editProfile';
import Drops from './components/Drops';
import ClientCard from './components/ClientCard';
function App() {




  return (
<div>
  
      <NavBar/>
  <Routes>


  <Route path="/fashion" element={<FashionShow/>}/> 

   <Route path="/"      element={<Home/>}/> 
  <Route path="/signUp"      element={<SignUp/>}/> 
<Route path="/signIn"      element={<SignIn/>}/> 

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
