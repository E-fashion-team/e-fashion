import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { store } from './store/index'
import { Provider } from 'react-redux'
<<<<<<< HEAD
=======

>>>>>>> 0fc36c0849cffa19dd99862b0f82c10fd568cfcf
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


   <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
<<<<<<< HEAD
  </BrowserRouter>

);
=======
   </BrowserRouter>


)

>>>>>>> 0fc36c0849cffa19dd99862b0f82c10fd568cfcf


