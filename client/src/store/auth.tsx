// signUpSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface SignUpState {
    loading: boolean;
    error: string | null;
    user: object
}

const initialState: SignUpState = {
    loading: false,
    error: null,
    user: {}
};

// Async Thunk for Signup
export const signupUser = createAsyncThunk("signup/signupUser", async (formData: object) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/singup", formData);
      return response.data; // Assuming your API returns user data upon successful signup
    } catch (error) {
      // Handle error and reject the promise with the error message
      return "Signup failed";
    }
  });

  const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        builder.addCase(signupUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload
        })
        builder.addCase(signupUser.rejected, (state, action) => {
          state.loading = false;
        //   state.error = action.payload
        });
    },
  });

export default signUpSlice.reducer