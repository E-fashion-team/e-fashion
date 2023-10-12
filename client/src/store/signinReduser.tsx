import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface SignInState {
    loading: boolean;
    error: string | null;
    user: object,
  }
  const initialState: SignInState = {
    loading: false,
    error: null,
    user: {},
};

export const signinUser = createAsyncThunk("signin/signinUser", async (formData: object) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", formData);
      console.log(formData);
      
      return response.data; 
      // Assuming your API returns user data upon successful signup
    } catch (error) {
      // Handle error and reject the promise with the error message
      return "Signin failed";
    }
  });
   const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signinUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        builder.addCase(signinUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload
        })
        builder.addCase(signinUser.rejected, (state, action) => {
          state.loading = false;
        //   state.error = action.payload
        });
    },
  });
  export default signInSlice.reducer