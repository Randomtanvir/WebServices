import React, { Suspense } from "react";
import { getBlogById } from "@/utils/fetchDataFromMongodb";
import BlogForm from "@/app/(dashboard)/_components/blogs/BlogForm";

const BlogEditPage = async ({ params }) => {
  const { id } = await params;
  const blog = await getBlogById(id);
  return <BlogForm blog={blog} />;
};

export default BlogEditPage;
