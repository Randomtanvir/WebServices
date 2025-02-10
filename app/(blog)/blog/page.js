import CardComponent from "@/components/common/CardComponent";
import { BgBlueDot, BubbleBg } from "@/svg/AllSvgs";
import { getBlogs } from "@/utils/fetchDataFromMongodb";
import React from "react";

const BlogPage = async () => {
  const blogs = await getBlogs();
  return (
    <>
      <div className="h-[45vh] bg-gradient-to-r from-indigo-800 to-purple-800 relative ">
        <BgBlueDot className="absolute z-10 top-20 left-5" />
        <BgBlueDot className="absolute z-10 bottom-20 right-5" />
        <BubbleBg className="w-48 h-48  absolute bottom-0 left-1.5" />
        <BubbleBg className="absolute top-30 right-5" />
        <div className="text-white md:text-6xl text-2xl font-bold container mx-auto px-6 lg:px-20 pt-20 ">
          <h1 className="mt-36">Blog - Valuable informative content</h1>
          <span className="w-40 h-[3px] bg-gradient-to-r from-white to-purple-800 inline-block animate-pulse"></span>
        </div>
      </div>
      <section className="text-red-500 container mx-auto px-6 lg:px-20 py-20 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogs?.length > 0 &&
            blogs?.map((blog) => <CardComponent key={blog?.id} item={blog} />)}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
