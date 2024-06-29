import { createSlice } from "@reduxjs/toolkit";

const selectedCampSlice = createSlice({
  name: "selectedCamp",
  initialState: {
    value: "" as string,
  },
  reducers: {
    selectedCampR: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { selectedCampR } = selectedCampSlice.actions;
export default selectedCampSlice.reducer