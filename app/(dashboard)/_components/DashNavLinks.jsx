"use client";
import useDasAuth from "@/hooks/useDasAuth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const DashNavLinks = () => {
  const pathname = usePathname();
  const { setDasAuth } = useDasAuth();
  const router = useRouter();

  const dashNav = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Project", path: "/dashboard/project" },
    { name: "Blog", path: "/dashboard/blog" },
    { name: "Team", path: "/dashboard/team" },
    { name: "Services", path: "/dashboard/services" },
  ];
  return (
    <nav className="flex-grow">
      <ul className="space-y-2">
        {dashNav?.map((item) => (
          <li key={item?.name}>
            <Link
              href={item?.path}
              className={`${
                pathname === item.path ? "bg-white text-gray-800" : ""
              } block py-2 px-4 font-semibold rounded-lg text-gray-100 hover:bg-gray-100 hover:text-gray-900`}
            >
              {item?.name}
            </Link>
          </li>
        ))}
        <button
          className="block w-full cursor-pointer py-2 px-4 font-semibold rounded-lg text-gray-100 hover:bg-gray-100 hover:text-gray-900"
          onClick={() => {
            setDasAuth({});
            router.push("/login");
          }}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default DashNavLinks;
