"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  const [text, setText] = useState("");
  const filterBlog = blogs?.filter((blog) =>
    blog?.title?.toLowerCase()?.includes(text?.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search blog..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
      <div className="h-full max-h-[500px] overflow-auto ">
        {filterBlog?.length > 0 &&
          filterBlog?.map((blog, i) => (
            <BlogCard key={blog?.id} {...blog} index={i} />
          ))}
      </div>
      {filterBlog?.length === 0 && <h1>No blog available</h1>}
    </div>
  );
};

export default BlogList;
