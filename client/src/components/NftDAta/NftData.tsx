import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



enum Category{
  Men="men",
 Women= "women",
  Kids="kids",
 Other= "other"


}
interface Product {
 
  id: number;
  name: string;
  price: number;  
  image:string;
category:Category


}

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await axios.get('http://localhost:5000/api/product/NFT');

  return response.data;
});


const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';

      });
  },
});

export default productSlice.reducer;
