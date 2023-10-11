import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import { store } from './store/index'
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom"
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
=======
  </BrowserRouter>

>>>>>>> a245ce95f0903cdffc62986c377f674db2944d38
);


