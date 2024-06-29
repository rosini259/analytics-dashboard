import { configureStore } from "@reduxjs/toolkit";

import {
  checkedSchoolSlice,
  dataSlice,
  objColorSlice,
  routedDataSlice,
  schoolOptionsSlice,
  selectedCampSlice,
  selectedCountrySlice,
  selectedSchoolSlice,
  selectedValuesDetailsSlice,
} from "@/store";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    selectedValuesDetails: selectedValuesDetailsSlice,
    schoolOptions: schoolOptionsSlice,
    selectedSchool: selectedSchoolSlice,
    selectedCamp: selectedCampSlice,
    selectedCountry: selectedCountrySlice,
    checkedSchool: checkedSchoolSlice,
    routedData: routedDataSlice,
    objColor: objColorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// bug make selected country,school,camp in one object and country,school,camp options in one object
