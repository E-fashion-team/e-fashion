import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'
import Drops from './components/Drops';

function App() {
  return (
    <div className="App">
      <NavBar/>
    
    <Drops/>
   {/* <Routes> */}
{/* <Route path='/' element={</>}/>
<Route path='/' element={</>}/>
<Route path='/' element={</>}/>
<Route path='/' element={</>}/>
<Route path='/' element={</>}/> */}
   {/* </Routes> */}
   <Footer/>
    </div>
  );
}

export default App;
