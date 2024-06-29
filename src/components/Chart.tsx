"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ActiveElement, ChartEvent } from "chart.js/auto";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { routedDataR } from "@/store/routedDataSlice";

const Chart = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedCountry = useAppSelector(
    (state) => state.selectedCountry.value
  );
  const selectedCamp = useAppSelector((state) => state.selectedCamp.value);
  const schoolOptions = useAppSelector((state) => state.schoolOptions.value);
  const objColor = useAppSelector(
    (state): objColorTypes => state.objColor.value
  );
  const lessonsData = useAppSelector((state) => state.data.value);
  const checkedSchools = useAppSelector((state) => state.checkedSchool.value);
  let snc: dataTypes[][] = [];

  schoolOptions.map((school) => {
    const schoolNCamp = Array.from(
      new Set(
        lessonsData.filter((ele) => {
          if (ele.country === selectedCountry) {
            if (ele.camp === selectedCamp) {
              return ele;
            }
          }
        })
      )
    ).filter((ele) => {
      return ele.school === school;
    });
    snc.push(schoolNCamp);
  });

  const monthsObj: { [key: string]: number } = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };

  const datasets = snc
    .filter(
      (school) => school.length > 0 && checkedSchools.includes(school[0].school)
    )
    .map((schoolData) => {
      let objTWO = { ...monthsObj };
      schoolData.map((ele) => {
        objTWO[ele.month] += ele.lessons;
      });
      return {
        label: schoolData[0].school,
        data: Object.values(objTWO),
        fill: false,
        backgroundColor: objColor[schoolData[0].school],
        borderColor: objColor[schoolData[0].school],
      };
    });

  const months = Object.keys(monthsObj);
  const chartData = {
    labels: months,
    datasets: datasets,
  };
  const optionsData = {
    onClick: (_: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const indexOfSchools = elements[0].datasetIndex;
        const monthIndex = elements[0].index;
        const month = months[monthIndex];
        const schoolData = snc[indexOfSchools];
        const dataOfSchool = schoolData.find((data) => data.month === month);
        // bug sometimes dataOfSchool return undefined after checked some school
        if (dataOfSchool) {
          const dataOfSchoolCopy = { ...dataOfSchool };
          const updatedLessons = datasets[indexOfSchools].data[monthIndex];
          dataOfSchoolCopy.lessons = updatedLessons;
          dispatch(routedDataR(dataOfSchoolCopy));
          router.push("/navigated");
        } else {
          console.log("No data");
        }
      }
    },
  };
  // bug re-renders
  return (
    <div className="w-[70%] h-full border-r border-slate-500 ">
      <h1 className="">no of lessons</h1>
      <div className="chart w-full h-full flex">
        <Line data={chartData} options={optionsData} className="self-center" />
      </div>
    </div>
  );
}

export default Chart
