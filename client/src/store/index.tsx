import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from "./auth";
import signinReduser from './signinReduser';
import productReducer from "../components/ProductData/productData"
import chatReducer from './chatSlice';
import createProductReducer from './CreateProductSlice';
export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
   ...signinReduser,
    products: productReducer,
    createProduct: createProductReducer    
    
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch





