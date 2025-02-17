"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BlogCard = ({ id, title, coverPhoto, index }) => {
  const router = useRouter();
  const handelDelete = async () => {
    if (confirm("Are you Sure?")) {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
        toast.success("Delete Complete.");
        console.log("Blog deleted successfully!");
      } else {
        console.error("Failed to delete blog.");
      }
    }
  };
  return (
    <div className="flex items-center gap-4 justify-between border-b border-purple-200 py-2">
      <span className="w-6 text-center font-semibold">{index + 1}</span>
      <Image
        width={40}
        height={40}
        src={coverPhoto}
        alt={title}
        className="w-10 h-10 rounded"
      />
      <span className="flex-1 ml-2 text-base">{title}</span>
      <Link
        href={`/dashboard/blog/edit/${id}`}
        className="bg-indigo-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-200"
      >
        Edit
      </Link>
      <button
        onClick={handelDelete}
        className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default BlogCard;
