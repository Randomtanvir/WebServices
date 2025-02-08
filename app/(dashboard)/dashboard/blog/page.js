import BlogCard from "../../_components/blogs/BlogCard";
import ItemAddedCompo from "../../_components/common/ItemAddedCompo";
import { getBlogs } from "@/utils/fetchDataFromMongodb";

const DashBlogPage = async () => {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ItemAddedCompo />
      {blogs?.length > 0 &&
        blogs?.map((blog) => (
          <BlogCard
            key={blog?.id}
            title={blog?.title}
            content={blog?.content}
            coverPhoto={blog?.coverPhoto}
          />
        ))}
    </div>
  );
};

export default DashBlogPage;
