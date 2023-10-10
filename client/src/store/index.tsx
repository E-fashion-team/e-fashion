import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from "./auth";

export const store = configureStore({
  reducer: {
    alaa: signUpReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch