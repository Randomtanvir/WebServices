import DotLoader from "@/components/common/DotLoader";
import Loader from "@/components/common/Loader";
import SpinLoader from "@/components/common/SpinLoader";
import React from "react";

const loading = () => {
  return (
    <div>
      <SpinLoader />
    </div>
  );
};

export default loading;
