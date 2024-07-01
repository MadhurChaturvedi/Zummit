import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
    removeUser: (state, action) => {
      state.data = {};
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
