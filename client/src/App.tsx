import SignIn from './components/SignIn';
import './App.css';
import SignUp from './components/SignUp';

import React,{useState}  from 'react';




import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatorStudioPage } from "./components/CreatorStudio";
import AllNFT from "./pages/AllNFT";
import { BrandPage } from "./components/BrandPage";
import { BrandStorePage } from "./components/BranStore";
// import { Messages } from "./components/messages";
import { Market } from "./components/Market";
import { FasShow } from "./components/FasShow";
import axios from 'axios'
import About from './components/About';
import Home from './pages/Home';
import { Stats } from './components/Statistique';
import FashionShow from "./components/fashion show/fashionShow"
import ExplorePage from './components/explorePqge/explore';
import EditProfile from './components/editProfile/editProfile';
import ClientCard from './components/BrandCard';
import FashionShows from './components/FashionShows';
import Chat from './components/message1';
import Drops from './components/Drops';
// import {Messages} from "./pages/Messages"
import CreateProduct from './components/CreateProduct';

import CreateBrand from './components/CreateBrand';
import UpdateAccount from "./components/editProfile/update"
import Error404 from './components/Erroe';
import FullProductCard from './components/ProductCard';







function App() {
  
  return (

    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path='/fashionshow'element={<FashionShow/>}/>
        <Route  path='/fashionShows' element={<FashionShows/>}/>
        <Route path="/NFT" element={<AllNFT />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<Stats />} />
        {/* <Route path="/messages" element={<Messages />} /> */}
        <Route path="/drops" element={<Drops />} />
        <Route path="/brandpage" element={<BrandPage />} />
        <Route path="/brandstore" element={<BrandStorePage/>}/>
        <Route path="/studio" element={<CreatorStudioPage />} />
        <Route path="/market" element={<Market />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<Error404/>} />

        <Route path="/createBrand" element={<CreateBrand/>}/>


        
        <Route  path='/selfash' element={<FasShow/>}/>
        <Route  path='/clientCard' element={<ClientCard/>}/>
        <Route  path='/fashionShows' element={<FashionShows/>}/>
        <Route path="/message" element={<Chat />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/update"    element={<UpdateAccount />}/>
        <Route path="/productCards"    element={<FullProductCard />}/>

   
  



  





  </Routes> 
  

 </div>




  );
}

export default App;
