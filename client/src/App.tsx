import Drops from './components/Drops';
import React,{useState}  from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import EditProfile from "./components/editProfile/editProfile"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import ExplorePage from "./components/explorePqge/explore"
import Home  from "./pages/Home"

function App() {


// const updateUser=(name:string,newUser:object)=>{

// axios.put(`http://localhost:5000/api/user/${name}`,newUser).then((response)=>{


// }).catch((error)=>{
// console.log(error)
// })
// }


  return (

    <BrowserRouter   >
      <NavBar/>
   
   
  <Routes>
    <Route path="/home"      element={<Home/>}/> 
<Route  path="/explore"  element={<ExplorePage/>}  />
<Route path='/edit' element={< EditProfile/>}/>


  </Routes> 
   <Footer/>
   </BrowserRouter>

  );
}

export default App;
