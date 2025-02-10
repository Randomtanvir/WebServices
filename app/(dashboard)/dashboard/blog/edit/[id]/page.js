import React, { Suspense } from "react";
import { getBlogById } from "@/utils/fetchDataFromMongodb";
import BlogAddForm from "@/app/(dashboard)/_components/blogs/BlogAddForm";
import DotLoader from "@/components/common/DotLoader";

const BlogEditPage = async ({ params }) => {
  const { id } = await params;
  const blog = await getBlogById(id);
  return (
    <Suspense fallback={<DotLoader />}>
      <BlogAddForm blog={blog} />
    </Suspense>
  );
};

export default BlogEditPage;
