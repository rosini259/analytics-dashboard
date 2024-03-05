import { addSchool, removeSchool } from "@/app/features/globalSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
declare module "react" {
  interface CSSProperties {
    "--input-color"?: string;
  }
}
const SideBar = ({
  schoolNcolor,
}: {
  schoolNcolor: { [key: string]: string };
}) => {
  const dispatch = useAppDispatch();
  const selectedValues = useAppSelector((state) => state.selectedValues.value);
  const schoolOptions = useAppSelector((state) => state.schoolOptions.value);
  const selectedSchool = useAppSelector((state) => state.selectedSchool.value);
  const selectedCamp = useAppSelector((state) => state.selectedCamp.value);
  const data = useAppSelector((state) => state.data.value);
  const selectedCountry = useAppSelector(
    (state) => state.selectedCountry.value
  );
  const checkedSchools = useAppSelector((state) => state.checkedSchool.value);
  const schoolNCamp = Array.from(
    new Set(
      data.filter((ele) => {
        if (ele.country === selectedCountry) {
          if (ele.camp === selectedCamp) {
            return ele;
          }
        }
      })
    )
  );
  const totalLessonsCamp = schoolNCamp
    .map((ele) => {
      return ele.lessons;
    })
    .reduce((total, ele) => {
      return total + ele;
    }, 0);

  const totalLessonsSchool = selectedValues
    .map((ele) => {
      return ele.lessons;
    })
    .reduce((total, ele) => {
      return total + ele;
    }, 0);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(addSchool(event.target.name));
    } else {
      dispatch(removeSchool(event.target.name));
    }
  };
  const colors = [
    "rgb(255,99,132)", // red
    "rgb(54,162,235)", // blue
    "rgb(255,206,86)", // yellow
    "rgb(75,192,192)", // green
    "rgb(153,102,255)", // purple
    "rgb(255,159,64)", // orange
  ];

  return (
    <div className="w-[25%]">
      <div className="heading mb-10">
        <h1 className="text-xl">
          <span className="text-3xl">{totalLessonsCamp}</span> lessons
        </h1>
        <p>in {`${selectedCamp}`}</p>
      </div>
      <div className="scrollBar border border-gray-400 w-full h-[80%]">
        {selectedSchool === "Show all" ? (
          schoolOptions.map((school, i) => {
            const totalLessonsSchool = schoolNCamp
              .filter((ele) => ele.school === school)
              .reduce((total, ele) => total + ele.lessons, 0);
            schoolNcolor[school] = colors[i];
            return (
              <div className="checkbox flex justify-around mt-3" key={i}>
                <input
                  type="checkbox"
                  name={school}
                  id={school}
                  onChange={handleCheckboxChange}
                  checked={checkedSchools.includes(school)}
                  className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full focus:outline-none"
                  style={{
                    "--input-color": checkedSchools.includes(school)
                      ? colors[i]
                      : "transparent",
                  }}
                />
                <label htmlFor={school}>
                  <div className="heading">
                    <h1 className="text-xl" style={{ color: colors[i] }}>
                      <span className="text-3xl" style={{ color: colors[i] }}>
                        {totalLessonsSchool}
                      </span>{" "}
                      lessons
                    </h1>
                    <p style={{ color: colors[i] }}>in {`${school}`}</p>
                  </div>
                </label>
              </div>
            );
          })
        ) : (
          // it will not take their colors before render the show all element
          <div className="checkbox flex justify-around mt-3">
            <input
              type="checkbox"
              name={`${selectedSchool}`}
              id={`${selectedSchool}`}
              onChange={handleCheckboxChange}
              checked={checkedSchools.includes(selectedSchool)}
              className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full focus:outline-none"
              style={{
                "--input-color": checkedSchools.includes(selectedSchool)
                  ? schoolNcolor[selectedSchool]
                  : "transparent",
              }}
            />
            <label htmlFor={`${selectedSchool}`}>
              <div className="heading">
                <h1
                  className="text-xl"
                  style={{ color: schoolNcolor[selectedSchool] }}
                >
                  <span
                    className="text-3xl"
                    style={{ color: schoolNcolor[selectedSchool] }}
                  >
                    {totalLessonsSchool}
                  </span>{" "}
                  lessons
                </h1>
                <p style={{ color: schoolNcolor[selectedSchool] }}>
                  in {`${selectedSchool}`}
                </p>
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
