import React from 'react';


import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
   <Routes>
{/* <Route path='/' element={</>}/>
<Route path='/' element={</>}/>
<Route path='/' element={</>}/>
<Route path='/' element={</>}/>
<Route path='/' element={</>}/> */}
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
