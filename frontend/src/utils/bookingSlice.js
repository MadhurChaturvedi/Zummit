import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    selectedCouncellor: null,
    selectedGroup: null,
    selected_support_group: null,
  },
  reducers: {
    addCouncellor: (state, action) => {
      state.selectedCouncellor = action.payload;
    },
    addGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
    addSupportGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const { addCouncellor, addGroup, addSupportGroup } =
  bookingSlice.actions;
export default bookingSlice.reducer;
