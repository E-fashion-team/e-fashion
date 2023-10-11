// import Drops from './components/Drops';
import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ExplorePage from "./components/explorePqge/explore";
import Home from "./pages/Home";
import EditProfile from "./components/editProfile/editProfile";
import About from "./components/About";
import { CreatorStudioPage } from "./components/CreatorStudio";

import { Stats } from "./components/Statistique";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Drops from "./components/Drops";
import ClientCard from "./components/ClientCard";
import AllNFT from "./pages/AllNFT";
import { BrandPage } from "./components/BrandPage";
import { BrandStorePage } from "./components/BranStore";
import { Messages } from "./components/messages";
import CreateBrand from "./components/CreateBrand";
import { Market } from "./components/Market";
import FashionShow from "./components/fashion show/fashionShow";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/market" element={<Market />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/studio" element={<CreatorStudioPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/brandpage" element={<BrandPage />} />
        <Route path="/brandstore" element={<BrandStorePage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/NFT" element={<AllNFT />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/createBrand" element={<CreateBrand/>}/>
        <Route path='/fashionshow'element={<FashionShow/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
