import { createSlice } from "@reduxjs/toolkit";

export const selectedCountrySlice = createSlice({
  name: "selectedCountry",
  initialState: {
    value: "" as string,
  },
  reducers: {
    selectedCountryR: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { selectedCountryR } = selectedCountrySlice.actions;
export default selectedCountrySlice.reducer