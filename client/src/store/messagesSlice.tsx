import { createSlice } from '@reduxjs/toolkit';


interface MessagesState {
  data: string[];
}

const initialState: MessagesState = {
  data: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: any) => {
        state.data = action.payload
    },
  },
});


export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
