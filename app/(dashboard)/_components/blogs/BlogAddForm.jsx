"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BlogAddForm = ({ blog }) => {
  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [coverPhoto, setCoverPhoto] = useState(blog?.coverPhoto || null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Pre-populate the form for editing
  useEffect(() => {
    if (blog) {
      setTitle(blog.title || "");
      setContent(blog.content || "");
      setCoverPhoto(blog.coverPhoto || null); // Assuming the blog has a cover photo URL or path
    }
  }, [blog]);

  const handleImageChange = (e) => {
    setCoverPhoto(e.target.files[0]); // Store file in state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    // If a new cover photo is selected, append it to the formData
    if (coverPhoto && typeof coverPhoto !== "string") {
      formData.append("coverPhoto", coverPhoto);
    } else if (coverPhoto && typeof coverPhoto === "string") {
      // If the cover photo is an existing URL, keep it as is
      formData.append("coverPhoto", coverPhoto);
    }

    try {
      const res = blog
        ? await fetch(`/api/blogs/${blog._id}`, {
            method: "PATCH", // Use PATCH for editing
            body: formData,
          })
        : await fetch("/api/blogs", {
            method: "POST", // Use POST for creating
            body: formData,
          });

      if (res.ok) {
        router.push("/dashboard/blog");
        toast.success("Blog Save Successfully");
      } else {
        console.error("Failed to save blog post");
      }
    } catch (error) {
      console.log(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        {blog ? "Edit Blog Post" : "Add New Blog Post"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cover Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded-lg"
          />
          {coverPhoto && typeof coverPhoto !== "string" && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(coverPhoto)}
                alt="Cover Preview"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          )}

          {/* If coverPhoto is a URL (existing image from the blog), show the image */}
          {coverPhoto && typeof coverPhoto === "string" && (
            <div className="mt-2">
              <img
                src={coverPhoto}
                alt="Cover Photo"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {loading ? "Saving..." : blog ? "Update Blog" : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogAddForm;
