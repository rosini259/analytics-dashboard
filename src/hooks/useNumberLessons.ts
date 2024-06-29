import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { schoolOptionsR } from "@/store/schoolOptionsSlice";
import actGetData from "@/store/act/actGetData";
import { selectedValuesDetails } from "@/store/selectedValuesDetailsSlice";

const useNumberLessons = () => {
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
    if (selectedCountry && selectedCamp && selectedSchool) {
      dispatch(
        selectedValuesDetails(
          Array.from(
            new Set(
              data.filter((ele) => {
                return (
                  ele.country === selectedCountry &&
                  ele.camp === selectedCamp &&
                  ele.school === selectedSchool
                );
              })
            )
          )
        )
      );
    }
  }, [data, selectedCountry, selectedCamp, selectedSchool]);

  useEffect(() => {
    dispatch(actGetData());
  }, [dispatch]);

  useEffect(() => {
    const uniqueCountries = Array.from(new Set(data.map((ele) => ele.country)));
    setCountryOptions(uniqueCountries);
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
    }
  }, [data, dispatch, selectedCamp]);
  return {
    schoolOptions,
    campOptions,
    countryOptions,
    selectedCountry,
    selectedCamp,
    selectedSchool,
  };
};

export default useNumberLessons;
