import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from "./auth";
import signinReduser from './signinReduser';
import productReducer from "../components/ProductData/productData"
import chatReducer from './chatSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signinReduser ,
    products: productReducer,
   chat:chatReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
