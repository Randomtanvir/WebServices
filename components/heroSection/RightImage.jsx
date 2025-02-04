import Image from "next/image";
import React from "react";

const RightImage = () => {
  return (
    <div className="lg:w-1/2 flex justify-center opacity-0 animate-fadeScale">
      <Image src="/business.svg" alt="business" width={600} height={600} />
    </div>
  );
};

export default RightImage;
