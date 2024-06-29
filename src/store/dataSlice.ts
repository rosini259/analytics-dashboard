import { createSlice } from "@reduxjs/toolkit";
import actGetData from "./act/actGetData";

interface IDataStatus {
  value: dataTypes[];
  loading: "idle" | "success" | "failed" | "pending";
  error: null | string
}
const initialState: IDataStatus = {
  value: [],
  loading: "idle",
  error: null,
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetData.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(actGetData.fulfilled, (state, action) => {
      state.value = action.payload;
      state.loading = "success";
    });
    builder.addCase(actGetData.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error as string
    });
  },
});
export default dataSlice.reducer;
