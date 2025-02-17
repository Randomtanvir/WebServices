import React, { Suspense } from "react";
import { getBlogById } from "@/utils/fetchDataFromMongodb";
import DotLoader from "@/components/common/DotLoader";
import BlogForm from "@/app/(dashboard)/_components/blogs/BlogForm";

const BlogEditPage = async ({ params }) => {
  const { id } = await params;
  const blog = await getBlogById(id);
  return (
    <Suspense fallback={<DotLoader />}>
      <BlogForm blog={blog} />
    </Suspense>
  );
};

export default BlogEditPage;
