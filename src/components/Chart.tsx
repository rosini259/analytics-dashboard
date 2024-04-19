"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { ActiveElement, ChartEvent } from "chart.js/auto";
import { routedDataR } from "@/app/features/globalSlice";
import { useRouter } from "next/navigation";

const Chart = () => {
  const objColor = useAppSelector(
    (state): objColorTypes => state.objColor.value
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const dataF = useAppSelector((state) => state.data.value);
  const schoolOptions = useAppSelector((state) => state.schoolOptions.value);
  const selectedCamp = useAppSelector((state) => state.selectedCamp.value);
  const selectedCountry = useAppSelector(
    (state) => state.selectedCountry.value
  );
  const checkedSchools = useAppSelector((state) => state.checkedSchool.value);
  let snc: dataTypes[][] = [];
  schoolOptions.map((school) => {
    const schoolNCamp = Array.from(
      new Set(
        dataF.filter((ele) => {
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
  const datasets = snc
    .filter(
      (school) => school.length > 0 && checkedSchools.includes(school[0].school)
    )
    .map((schoolData, i) => {
      let obj: { [key: string]: number } = {
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
      schoolData.map((ele) => {
        obj[ele.month] += ele.lessons;
      });
      return {
        label: schoolData[0].school,
        data: Object.values(obj),
        fill: false,
        backgroundColor: objColor[schoolData[0].school],
        borderColor: objColor[schoolData[0].school],
      };
    });
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: months,
    datasets: datasets,
  };
  const options = {
    onClick: (e: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const indexOfSchools = elements[0].datasetIndex;
        const monthIndex = elements[0].index;
        const month = months[monthIndex];
        const schoolData = snc[indexOfSchools];
        const dataOfSchool = schoolData.find((data) => data.month === month);
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
  return (
    <div className="w-[70%] h-full border-r border-slate-500 ">
      <h1 className="">no of lessons</h1>
      <div className="chart w-full h-full flex">
        <Line data={data} options={options} className="self-center" />
      </div>
    </div>
  );
};

export default Chart;
