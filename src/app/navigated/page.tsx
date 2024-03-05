"use client";
import { useAppSelector } from "../hooks";

const Page = () => {
  const routedData = useAppSelector((state) => state.routedData.value);
  return (
    <div>
      <div className="">{`country: ${routedData.country}`}</div>
      <div className="">{`camp: ${routedData.camp}`}</div>
      <div className="">{`school: ${routedData.school}`} </div>
      <div className="">{`month: ${routedData.month}`}</div>
      <div className="">{`lessons: ${routedData.lessons}`} </div>
    </div>
  );
};

export default Page;
