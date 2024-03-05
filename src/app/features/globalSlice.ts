import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [] as dataTypes[],
  },
  reducers: {
    fdata: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const selectedValuesSlice = createSlice({
  name: "selectedValues",
  initialState: {
    value: [] as dataTypes[],
  },
  reducers: {
    selectedValues: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const schoolOptionsSlice = createSlice({
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
export const selectedSchoolSlice = createSlice({
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
export const selectedCampSlice = createSlice({
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
export const checkedSchoolSlice = createSlice({
  name: "checkedSchool",
  initialState: {
    value: [] as string[],
  },
  reducers: {
    addSchool: (state, action) => {
      state.value.push(action.payload);
    },
    removeSchool: (state, action) => {
      state.value = state.value.filter(
        (school) => school !== action.payload
      );
    },
  },
});
export const routedDataSlice = createSlice({
  name: "routedData",
  initialState: {
    value: {} as dataTypes
  },
  reducers: {
    routedDataR: (state, action) => {
      state.value = action.payload
    },
  },
});


// Action creators are generated for each case reducer function
export const { fdata } = dataSlice.actions;
export const { selectedValues } = selectedValuesSlice.actions;
export const { schoolOptionsR } = schoolOptionsSlice.actions;
export const { selectedSchoolR } = selectedSchoolSlice.actions;
export const { selectedCampR } = selectedCampSlice.actions;
export const { selectedCountryR } = selectedCountrySlice.actions;
export const { addSchool,removeSchool } = checkedSchoolSlice.actions;
export const { routedDataR } = routedDataSlice.actions;
