import { TeamBgBottonSvg, TeamBgSvg } from "@/svg/AllSvgs";
import React from "react";
import TeamMemberList from "./TeamMemberList";

const TeamSection = () => {
  return (
    <section id="teams" className="py-20  bg-gray-100 relative">
      <div className="absolute left-0 top-0">
        <TeamBgSvg />
      </div>

      <div className="container mx-auto  px-6 lg:px-20 text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeIn">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 mb-12 opacity-0 animate-fadeIn">
          Our team of skilled professionals is here to help your business grow
          and succeed.
        </p>

        <TeamMemberList />
      </div>
      <div className="absolute bottom-0 right-0">
        <TeamBgBottonSvg />
      </div>
    </section>
  );
};

export default TeamSection;
