// CreateProductSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface ProductState {
  name: string;
  price: number;
  image: string;
  userId: number;
  category: string;
  typeProd: string;
}

const initialState: ProductState = {
  name: '',
  price: 0,
  image: '',
  userId: 0,
  category: '',
  typeProd: '',
};

export const addProduct = createAsyncThunk("addProduct/productAdd", async (formData: object) => {
    try {
      const response = await axios.post("http://localhost:5000/api/product/newProduct", formData);
      console.log(response.data);
      return response.data; // Assuming your API returns user data upon successful signup
      
    } catch (error) {
      // Handle error and reject the promise with the error message
      return "product adding failed";
    }
  });

const createProductSlice = createSlice({
  name: 'createProduct',
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<ProductState>) => {
      const { name, price, image, userId ,category , typeProd} = action.payload;
      state.name = name;
      state.price = price;
      state.image = image;
      state.userId = userId;
      state.category = category;
      state.typeProd = typeProd;
    },
  },
});

export const { createProduct } = createProductSlice.actions;
export default createProductSlice.reducer;