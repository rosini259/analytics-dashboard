import { selectedCountryR } from "@/store/selectedCountrySlice";
import { selectedCampR } from "@/store/selectedCampSlice";
import { selectedSchoolR } from "@/store/selectedSchoolSlice";
import useNumberLessons from "@/hooks/useNumberLessons";
import { useAppDispatch } from "@/store/hooks";

const NumberLessons = () => {
  const dispatch = useAppDispatch();
  const {
    schoolOptions,
    campOptions,
    countryOptions,
    selectedCountry,
    selectedCamp,
    selectedSchool,
  } = useNumberLessons();
  // bug re-renders
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
