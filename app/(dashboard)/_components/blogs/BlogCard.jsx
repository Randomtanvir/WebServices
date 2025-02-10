"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogCard = ({ id, title, content, coverPhoto }) => {
  const router = useRouter();
  const handelDelete = async () => {
    if (confirm("Are you Sure?")) {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
        console.log("Blog deleted successfully!");
      } else {
        console.error("Failed to delete blog.");
      }
    }
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {coverPhoto && (
        <Image
          src={coverPhoto}
          alt={title}
          width={400}
          height={250}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{content.substring(0, 100)}...</p>
        <div className="flex justify-between mt-4">
          {/* Edit Button */}
          <Link
            href={`/dashboard/blog/edit/${id}`}
            className="bg-indigo-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-200"
          >
            Edit
          </Link>

          {/* Delete Button */}
          <button
            onClick={handelDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
