"use client";
import { DashboardAuthContex } from "@/contex";
import React, { useState } from "react";

const DashboardAuthProvider = ({ children }) => {
  const [dasAuth, setDasAuth] = useState({});
  return (
    <DashboardAuthContex.Provider value={{ dasAuth, setDasAuth }}>
      {children}
    </DashboardAuthContex.Provider>
  );
};

export default DashboardAuthProvider;
