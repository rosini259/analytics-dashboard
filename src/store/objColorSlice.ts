import { createSlice } from "@reduxjs/toolkit";

const objColorSlice = createSlice({
  name: "objColor",
  initialState: {
    value: {},
  },
  reducers: {
    objColorR: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { objColorR } = objColorSlice.actions;
export default objColorSlice.reducer