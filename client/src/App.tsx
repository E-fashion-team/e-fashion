import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CreateBrand from './components/CreateBrand';

function App() {
  return (
    <div className="App">
 <NavBar/>
<CreateBrand/>
 <Footer/>
    </div>
  );
}

export default App;
