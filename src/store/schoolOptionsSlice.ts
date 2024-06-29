import { createSlice } from "@reduxjs/toolkit";

 const schoolOptionsSlice = createSlice({
  name: "schoolOptions",
  initialState: {
    value: [] as string[],
  },
  reducers: {
    schoolOptionsR: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { schoolOptionsR } = schoolOptionsSlice.actions;
export default schoolOptionsSlice.reducer