import Image from "next/image";
import BlogList from "../../_components/blogs/BlogList";
import ItemAddedCompo from "../../_components/common/ItemAddedCompo";
import { getBlogs } from "@/utils/fetchDataFromMongodb";

const DashBlogPage = async () => {
  const blogs = await getBlogs();
  return (
    <section className="flex gap-2 justify-start md:flex-row flex-col">
      <ItemAddedCompo />
      <div className=" bg-white w-full md:max-w-4xl shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Blogs</h2>
        <BlogList blogs={blogs} />
      </div>
      <div>
        <Image width={400} height={400} src="/graph.jpg" alt="graphs" />
      </div>
    </section>
  );
};

export default DashBlogPage;
