import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetData = createAsyncThunk("act/actGetData", async (_, thunkApi) => {
  const {rejectWithValue} = thunkApi;
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
    )
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
});
export default actGetData