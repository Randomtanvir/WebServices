import Link from "next/link";
import React from "react";
import SearviceAddButton from "../../_components/service/SearviceAddButton";

const DashServicePae = () => {
  return (
    <div className="flex gap-5">
      <SearviceAddButton />
      <SearviceAddButton />
      <SearviceAddButton />
      <SearviceAddButton />
    </div>
  );
};

export default DashServicePae;
