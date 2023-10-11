import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from "./auth";
import signinReduser from './signinReduser';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signinReduser 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch