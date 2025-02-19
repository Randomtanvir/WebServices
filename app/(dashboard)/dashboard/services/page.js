import { getServices } from "@/utils/fetchDataFromMongodb";
import DashServiceList from "../../_components/service/DashServiceList";
import SearviceAddButton from "../../_components/service/SearviceAddButton";

const DashServicePae = async () => {
  const services = await getServices();
  return (
    <div className="flex md:flex-row flex-col items-center gap-5">
      <SearviceAddButton />
      <div className=" bg-white w-full md:max-w-4xl shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Services</h2>
        <DashServiceList services={services} />
      </div>
    </div>
  );
};

export default DashServicePae;
