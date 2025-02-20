import { auth } from "@/auth";
import SpinLoader from "@/components/common/SpinLoader";
import CommonNavBgClour from "@/components/navbar/CommonNavBgClour";
import ServiceBookingForm from "@/components/services/ServiceBookingForm";
import { getServices } from "@/utils/fetchDataFromMongodb";
import { redirect } from "next/navigation";
import React from "react";

const ServiceBookingPage = async () => {
  // const session = await auth();
  // if (session === null || session?.user?.role !== "user") {
  //   redirect("/login");
  // }

  const services = await getServices();
  return (
    <div className="h-full">
      <CommonNavBgClour />
      <ServiceBookingForm services={services} />
    </div>
  );
};

export default ServiceBookingPage;
