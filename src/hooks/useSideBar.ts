import { addSchool, removeSchool } from "@/store/checkedSchoolSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { objColorR } from "@/store/objColorSlice";
import { useEffect } from "react";

const useSideBar = () => {
  const dispatch = useAppDispatch();
  const objColor = useAppSelector(
    (state): objColorTypes => state.objColor.value
  );
  const selectedValuesDetails = useAppSelector(
    (state) => state.selectedValuesDetails.value
  );
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

  const totalLessonsSchool = selectedValuesDetails
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

  useEffect(() => {
    const newColorMap = { ...objColor };

    schoolOptions.forEach((school, i) => {
      if (!newColorMap[school]) {
        newColorMap[school] = colors[i];
      }
    });

    if (JSON.stringify(newColorMap) !== JSON.stringify(objColor)) {
      dispatch(objColorR(newColorMap));
    }
  }, [schoolOptions, objColor, dispatch]);
  return {
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
  };
};

export default useSideBar;
