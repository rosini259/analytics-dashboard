import { createSlice } from "@reduxjs/toolkit";

const routedDataSlice = createSlice({
  name: "routedData",
  initialState: {
    value: {} as dataTypes,
  },
  reducers: {
    routedDataR: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { routedDataR } = routedDataSlice.actions;
export default routedDataSlice.reducer