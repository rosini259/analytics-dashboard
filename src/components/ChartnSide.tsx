import Chart from "./Chart";
import SideBar from "./SideBar";

const ChartnOptions = () => {
  let schoolNcolor = {}
  return (
    <div className="mt-20 h-[calc(100vh-350px)] flex justify-between">
      <Chart schoolNcolor={schoolNcolor} />
      <SideBar schoolNcolor={schoolNcolor} />
    </div>
  );
};

export default ChartnOptions;
