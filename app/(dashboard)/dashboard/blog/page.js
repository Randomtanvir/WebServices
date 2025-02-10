import BlogCard from "../../_components/blogs/BlogCard";
import ItemAddedCompo from "../../_components/common/ItemAddedCompo";
import { getBlogs } from "@/utils/fetchDataFromMongodb";

const DashBlogPage = async () => {
  const blogs = await getBlogs();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <ItemAddedCompo />
      {blogs?.length > 0 &&
        blogs?.map((blog) => <BlogCard key={blog?.id} {...blog} />)}
    </div>
  );
};

export default DashBlogPage;
