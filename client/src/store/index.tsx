import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from "./auth";
import signinReduser from './signinReduser';
import productReducer from "../components/ProductData/productData"

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signinReduser ,
    products: productReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
