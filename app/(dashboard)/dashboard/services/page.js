import { getBookigLists, getServices } from "@/utils/fetchDataFromMongodb";
import DashServiceList from "../../_components/service/DashServiceList";
import SearviceAddButton from "../../_components/service/SearviceAddButton";
import SearviceBookingCard from "../../_components/service/SearviceBookingCard";

const DashServicePage = async () => {
  const bookingLists = await getBookigLists();
  const services = await getServices();
  return (
    <>
      <div className="flex md:flex-row flex-col  gap-10">
        <SearviceAddButton />
        <div className=" bg-white w-full md:max-w-4xl shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <DashServiceList services={services} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-10">
        <div className=" bg-white w-full h-[380px] overflow-auto my-10 md:max-w-4xl shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Booking List</h2>
          <SearviceBookingCard bookingLists={bookingLists} />
        </div>
        <div className=" bg-white w-full h-[380px] overflow-auto my-10 md:max-w-4xl shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Working on Project</h2>
          <SearviceBookingCard bookingLists={bookingLists} />
        </div>
      </div>
    </>
  );
};

export default DashServicePage;
