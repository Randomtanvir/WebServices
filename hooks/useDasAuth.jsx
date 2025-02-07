import { DashboardAuthContex } from "@/contex";
import { useContext } from "react";

const useDasAuth = () => {
  return useContext(DashboardAuthContex);
};

export default useDasAuth;
