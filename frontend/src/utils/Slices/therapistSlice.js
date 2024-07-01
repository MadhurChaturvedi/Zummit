import { createSlice } from "@reduxjs/toolkit";

const therapistSlice = createSlice({
  name: "therapist",
  initialState: {
    Therapist: null,
  },
  reducers: {
    addTherapist: (state, action) => {
      state.Therapist = action.payload;
    },
    removeTherapist: (state, action) => {
      state.Therapist = null;
    },
  },
});

export const { addTherapist, removeTherapist } = therapistSlice.actions;

export default therapistSlice.reducer;
