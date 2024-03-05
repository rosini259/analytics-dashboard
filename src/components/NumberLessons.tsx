import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchData } from "@/utils";
import { useEffect, useState } from "react";
import {
  fdata,
  schoolOptionsR,
  selectedCampR,
  selectedCountryR,
  selectedSchoolR,
  selectedValues,
} from "@/app/features/globalSlice";
const NumberLessons = () => {
  const selectedCountry = useAppSelector(
    (state) => state.selectedCountry.value
  );
  const selectedCamp = useAppSelector((state) => state.selectedCamp.value);
  const selectedSchool = useAppSelector((state) => state.selectedSchool.value);
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [campOptions, setCampOptions] = useState<string[]>([]);
  const schoolOptions = useAppSelector((state) => state.schoolOptions.value);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state): dataTypes[] => state.data.value);
  useEffect(() => {
    dispatch(
      selectedValues(
        Array.from(
          new Set(
            data.filter((ele) => {
              if (ele.country === selectedCountry) {
                if (ele.camp === selectedCamp) {
                  if (ele.school === selectedSchool) {
                    return ele;
                  }
                }
              }
            })
          )
        )
      )
    );
  }, [data, dispatch, selectedCamp, selectedCountry, selectedSchool]);

  useEffect(() => {
    fetchData().then((res) => dispatch(fdata(res)));
  }, [dispatch]);

  useEffect(() => {
    const uniqueCountries = Array.from(new Set(data.map((ele) => ele.country)));
    setCountryOptions(uniqueCountries);
    // dispatch(selectedCountryR(uniqueCountries[0]));
  }, [data, dispatch]);

  useEffect(() => {
    if (selectedCountry) {
      const uniqueCamps = Array.from(
        new Set(
          data
            .filter((ele) => ele.country === selectedCountry)
            .map((ele) => ele.camp)
        )
      );
      setCampOptions(uniqueCamps);
      // dispatch(selectedCampR(uniqueCamps[0]));
    }
  }, [data, dispatch, selectedCountry]);

  useEffect(() => {
    if (selectedCamp) {
      const uniqueSchools = Array.from(
        new Set(
          data
            .filter((ele) => ele.camp === selectedCamp)
            .map((ele) => ele.school)
        )
      );
      dispatch(schoolOptionsR(uniqueSchools));
      // dispatch(selectedSchoolR(uniqueSchools[0]));
    }
  }, [data, dispatch, selectedCamp]);

  return (
    <div>
      <h1 className="text-xl text-purple-700 font-normal mt-14 max-sm:mt-2">
        Number of lessons
      </h1>
      <div className="select-container flex justify-around mt-10 max-sm:flex max-sm:flex-col">
        <div className="select">
          <label htmlFor="1" className="mr-3">
            select country
          </label>
          <select
            name="1"
            id="1"
            className="w-52 h-10 bg-blue-300 border border-blue-500 outline-none"
            value={selectedCountry}
            onChange={(e) => dispatch(selectedCountryR(e.target.value))}
          >
            <option>select a country</option>
            {countryOptions.map((ele, i) => (
              <option key={i} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <label htmlFor="2" className="mr-3">
            select camp
          </label>
          <select
            name="2"
            id="2"
            className="w-52 h-10 bg-blue-300 border border-blue-500 outline-none"
            value={selectedCamp}
            onChange={(e) => dispatch(selectedCampR(e.target.value))}
          >
            <option>select a camp</option>
            {campOptions.map((ele, i) => (
              <option key={i} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <label htmlFor="3" className="mr-3">
            select school
          </label>
          <select
            name="3"
            id="3"
            className="w-52 h-10 bg-blue-300 border border-blue-500 outline-none"
            value={selectedSchool}
            onChange={(e) => dispatch(selectedSchoolR(e.target.value))}
          >
            <option>select a school</option>
            {schoolOptions.map((ele, i) => (
              <option key={i} value={ele}>
                {ele}
              </option>
            ))}
            <option value="Show all">Show all</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NumberLessons;
