import { createSlice } from "@reduxjs/toolkit";

const selectedValuesDetailsSlice = createSlice({
  name: "selectedValuesDetails",
  initialState: {
    value: [] as dataTypes[],
  },
  reducers: {
    selectedValuesDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { selectedValuesDetails } = selectedValuesDetailsSlice.actions;
export default selectedValuesDetailsSlice.reducer;
