import SignIn from './components/SignIn';
import './App.css';
import SignUp from './components/SignUp';
import React,{useState}  from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'

import About from './components/About';
import { CreatorStudioPage } from './components/CreatorStudio';
import Home from './pages/Home';
import { Stats } from './components/Statistique';


import FashionShow from "./components/fashion show/fashionShow"

import { Market } from './components/Market';

import ExplorePage from './components/explorePqge/explore';
import EditProfile from './components/editProfile/editProfile';


import Drops from './components/Drops';

function App() {

  return (
<div>
<Routes>
    <Route path="/signUp"      element={<SignUp/>}/> 
    <Route path="/signIn"      element={<SignIn/>}/> 

      {/* <NavBar/> */}
 
    <Route path="/"      element={<Home/>}/> 
    {/* <Route path="/market"      element={<Market/>}/>  */}
    <Route path="/explore"  element={<ExplorePage/>}  />
    <Route path="/edit" element={< EditProfile/>}/> 
    <Route path="/about" element={< About/>}/>
    <Route path="/studio"   element={< CreatorStudioPage/>} />
    <Route path='/stats' element={<Stats />}/>
    <Route path='/drops' element={<Drops />}/>
  </Routes> 
   {/* <Footer/> */}
 </div>



  );
}

export default App;
