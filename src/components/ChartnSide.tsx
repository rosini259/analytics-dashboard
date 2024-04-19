import Chart from "./Chart";
import SideBar from "./SideBar";

const ChartnOptions = () => {
  return (
    <div className="mt-20 h-[calc(100vh-350px)] flex justify-between">
      <Chart  />
      <SideBar  />
    </div>
  );
};

export default ChartnOptions;
