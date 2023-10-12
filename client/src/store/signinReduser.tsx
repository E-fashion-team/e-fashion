import { createSlice, createAsyncThunk,createAction, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";


interface SignInState {
    loading: boolean;
    error: string | null;
    user: object,
    type:string,
    isAuthenticated:boolean,
  }
  const initialState: SignInState = {
    loading: false,
    error: null,
    type:"",
    isAuthenticated:false,
    user: {},
};
export const getUser = createAsyncThunk("signin/getUser", async (formData: object) => {
  try {
    const token= JSON.stringify(localStorage.getItem("token"))
    const response = await axios.get("http://localhost:5000/api/user/getUser", {headers:{token:`Bearer ${token}`}});
    console.log("redux",response.data); 
    const user = response.data; // Assuming your API returns user data upon successful login
    
    return response.data; 
    // Assuming your API returns user data upon successful signup
  } catch (error) {
    // Handle error and reject the promise with the error message
    return "Signin failed";
  }
});

export const signinUser = createAsyncThunk("signin/signinUser", async (formData: object) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", formData);
      console.log(formData,"form");
      console.log(response.data); 
   // Assuming your API returns user data upon successful login
      
      return response.data; 
      // Assuming your API returns user data upon successful signup
    } catch (error) {
      // Handle error and reject the promise with the error message
      return "Signin failed";
    }
  });
  const getUserSlice = createSlice({
    name: "getUser",
    initialState:{    loading: false,
      error: null,
      user: {},},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload
        
        })
        builder.addCase(getUser.rejected, (state, action) => {
          state.loading = false;
        //   state.error = action.payload
        });
    },
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
          state.isAuthenticated=true
          //role can be "follower"/ "brand"/"fashionista"
          state.type=action.payload.user.role
          localStorage.setItem("token",action.payload.resp.data)
        })
        builder.addCase(signinUser.rejected, (state, action) => {
          state.loading = false;
        //   state.error = action.payload
        });
    },
  });
  export default {signIn:signInSlice.reducer,getUser:getUserSlice.reducer}