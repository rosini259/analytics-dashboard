import { createSlice } from "@reduxjs/toolkit";

const checkedSchoolSlice = createSlice({
  name: "checkedSchool",
  initialState: {
    value: [] as string[],
  },
  reducers: {
    addSchool: (state, action) => {
      state.value.push(action.payload);
    },
    removeSchool: (state, action) => {
      state.value = state.value.filter((school) => school !== action.payload);
    },
  },
});
export const { addSchool, removeSchool } = checkedSchoolSlice.actions;
export default checkedSchoolSlice.reducer