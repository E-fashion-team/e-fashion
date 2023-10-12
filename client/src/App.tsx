import SignIn from './components/SignIn';
import './App.css';
import SignUp from './components/SignUp';
import React,{useState}  from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatorStudioPage } from "./components/CreatorStudio";
import AllNFT from "./pages/AllNFT";
import { BrandPage } from "./components/BrandPage";
import { BrandStorePage } from "./components/BranStore";
import { Messages } from "./components/messages";
import CreateBrand from "./components/CreateBrand";
import { Market } from "./components/Market";
import { FasShow } from "./components/FasShow";
import axios from 'axios'
import About from './components/About';
import Home from './pages/Home';
import { Stats } from './components/Statistique';
import FashionShow from "./components/fashion show/fashionShow"
import ExplorePage from './components/explorePqge/explore';
import EditProfile from './components/editProfile/editProfile';
import ClientCard from './components/ClientCard';
import FashionShows from './components/FashionShows';
import Message from './components/messageTest';
import Drops from './components/Drops';







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
        <Route  path='/selfash' element={<FasShow/>}/>
        <Route  path='/clientCard' element={<ClientCard/>}/>
        <Route  path='/fashionShows' element={<FashionShows/>}/>
        <Route path="/message" element={<Message />} />
   
  



  





  </Routes> 
  

 </div>




  );
}

export default App;
