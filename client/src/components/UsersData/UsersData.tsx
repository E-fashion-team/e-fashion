import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



enum Role{
follower="follower",
brand= "brand",
fashionista="fashionista"
 


}
interface User {
 
  id: number;
  name: string;
  image:string;
  email: number;  
  password:string
  role:Role


}

export const fetchUsers = createAsyncThunk('Users/fetch', async () => {
  const response = await axios.get('http://localhost:5000/api/user/allUsers');

  return response.data;
});


const UserSlice = createSlice({
  name: 'Users',
  initialState: { Users: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';

      });
  },
});

export default UserSlice.reducer;
