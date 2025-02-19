import ServiceAddUpdateForm from "@/app/(dashboard)/_components/service/ServiceAddUpdateForm";
import { getServiceById } from "@/utils/fetchDataFromMongodb";
import React from "react";

const ServiceEditPage = async ({ params }) => {
  const { id } = await params;
  const service = await getServiceById(id);
  return (
    <div>
      <ServiceAddUpdateForm service={service} />
    </div>
  );
};

export default ServiceEditPage;
