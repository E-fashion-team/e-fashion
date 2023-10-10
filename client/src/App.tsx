import React from 'react';
import {Cloudinary} from "@cloudinary/url-gen";

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CreateBrand from './components/CreateBrand';

function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'ds4outzra'}});




  return (
    <div className="App">
 <NavBar/>
<CreateBrand/>
 <Footer/>
    </div>
  );
}

export default App;
