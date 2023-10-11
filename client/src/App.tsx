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


import { Stats } from './components/Statistique';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


import ExplorePage from './components/explorePqge/explore';
import EditProfile from './components/editProfile/editProfile';
import Drops from './components/Drops';

import ClientCard from './components/ClientCard';

import AllNFT from './pages/AllNFT';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/market" element={<Market />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/studio" element={<CreatorStudioPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/brandpage" element={<BrandPage />} />
        <Route path="/brandstore" element={<BrandStorePage />} />

        <Route path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
