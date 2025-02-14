import { BgBlueDot, BubbleBg } from "@/svg/AllSvgs";
import { getBlogById } from "@/utils/fetchDataFromMongodb";
import { formatDate } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;
  const blog = await getBlogById(id);

  return (
    <>
      <div className="bg-gradient-to-r h-[30vh] from-indigo-800 to-purple-800 relative "></div>
      <div className="max-w-2xl my-20 mx-auto shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <Image
          src={blog?.coverPhoto}
          alt={blog?.title}
          width={800}
          height={400}
          className="object-cover w-full h-64"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{blog?.title}</h1>
          <p className="text-gray-500 text-sm mb-6">
            {formatDate(blog?.createdAt)}
          </p>
          <div className="text-gray-700 text-base leading-relaxed">
            {blog?.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
