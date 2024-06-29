"use client";

import { useAppSelector } from "@/store/hooks";

const Page = () => {
  const routedData = useAppSelector((state) => state.routedData.value);
  return (
    <div>
      <div>{`country: ${routedData.country}`}</div>
      <div>{`camp: ${routedData.camp}`}</div>
      <div>{`school: ${routedData.school}`} </div>
      <div>{`month: ${routedData.month}`}</div>
      <div>{`lessons: ${routedData.lessons}`} </div>
    </div>
  );
};

export default Page;
