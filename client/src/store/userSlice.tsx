import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface userStateInter {
    loading: boolean;
    error: null | string;
    user: object;
    type: string;
    isAuthenticated: boolean;
}
const initialState: userStateInter = {
    loading: false,
    error: null,
    type: "",
    isAuthenticated: false,
    user: {},
};
export const getUser = createAsyncThunk("getUser", async (userId: any) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/user/getById/${userId}`);
        const user = response.data;
        return user
    } catch (err) {
        // Handle error and reject the promise with the error message
        console.error(err);
    }
});
// export const getAllUser = createAsyncThunk("getAllUser", async () => {
//     try {
//         const response = await axios.get(`http://localhost:5000/api/user/allUsers`);
//         const user = response.data;
//         return user
//     } catch (err) {
       
//         console.error(err);
//     }
// });

export const getUserSlice = createSlice({
    name: "activeUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getUser.fulfilled, (state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error = null;
            state.user = action.payload

        })
        builder.addCase(getUser.rejected, (state, action:PayloadAction<any>) => {
            state.error = JSON.stringify(action.payload);
            state.loading = false;
        });
    },
});

export default getUserSlice.reducer; // Export the reducer