import { configureStore } from "@reduxjs/toolkit";
import { checkedSchoolSlice, dataSlice, objColorSlice, routedDataSlice, schoolOptionsSlice, selectedCampSlice, selectedCountrySlice, selectedSchoolSlice, selectedValuesSlice } from "./features/globalSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    selectedValues: selectedValuesSlice.reducer,
    schoolOptions: schoolOptionsSlice.reducer,
    selectedSchool: selectedSchoolSlice.reducer,
    selectedCamp: selectedCampSlice.reducer,
    selectedCountry: selectedCountrySlice.reducer,
    checkedSchool: checkedSchoolSlice.reducer,
    routedData: routedDataSlice.reducer,
    objColor:objColorSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
