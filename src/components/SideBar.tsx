import useSideBar from "@/hooks/useSideBar";

declare module "react" {
  interface CSSProperties {
    "--input-color"?: string;
  }
}

const SideBar = () => {
  const {
    totalLessonsCamp,
    totalLessonsSchool,
    handleCheckboxChange,
    selectedSchool,
    checkedSchools,
    selectedCamp,
    schoolOptions,
    schoolNCamp,
    colors,
    objColor,
  } = useSideBar();
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
              // bug re-renders
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
                  ? objColor[selectedSchool]
                  : "transparent",
              }}
            />
            <label htmlFor={`${selectedSchool}`}>
              <div className="heading">
                <h1
                  className="text-xl"
                  style={{ color: objColor[selectedSchool] }}
                >
                  <span
                    className="text-3xl"
                    style={{ color: objColor[selectedSchool] }}
                  >
                    {totalLessonsSchool}
                  </span>{" "}
                  lessons
                </h1>
                <p style={{ color: objColor[selectedSchool] }}>
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
