import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    Admin: null,
  },
  reducers: {
    addAdmin: (state, action) => {
      state.Admin = action.payload;
    },
    removeAdmin: (state, action) => {
      state.Admin = null;
    },
  },
});

export const { addAdmin, removeAdmin } = adminSlice.actions;

export default adminSlice.reducer;
