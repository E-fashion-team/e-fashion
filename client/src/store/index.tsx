import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from "./auth";
import signinReduser from './signinReduser';
import getUserSlice from './signinReduser'
import productReducer from "../components/ProductData/productData"
import chatReducer from './chatSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
   ...signinReduser,
    products: productReducer,
   ...getUserSlice,
    chat:chatReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
