import React from "react";
import ServiceCard from "./ServiceCard";
import { getServices } from "@/utils/fetchDataFromMongodb";

const ServiceList = async () => {
  const services = await getServices();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services?.length > 0 &&
        services?.map((service) => (
          <ServiceCard key={service?._id} {...service} />
        ))}
      {services?.length === 0 && <h1>No Service Here</h1>}
    </div>
  );
};

export default ServiceList;
