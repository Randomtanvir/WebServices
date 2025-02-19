import { getServices } from "@/utils/fetchDataFromMongodb";
import DashServiceList from "../../_components/service/DashServiceList";
import SearviceAddButton from "../../_components/service/SearviceAddButton";

const DashServicePae = async () => {
  const services = await getServices();
  return (
    <div className="flex md:flex-row flex-col items-center gap-5">
      <SearviceAddButton />
      <DashServiceList services={services} />
    </div>
  );
};

export default DashServicePae;
