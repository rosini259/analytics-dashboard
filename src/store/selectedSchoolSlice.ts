import { createSlice } from "@reduxjs/toolkit";

const selectedSchoolSlice = createSlice({
  name: "selectedSchool",
  initialState: {
    value: "" as string,
  },
  reducers: {
    selectedSchoolR: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { selectedSchoolR } = selectedSchoolSlice.actions;
export default selectedSchoolSlice.reducer