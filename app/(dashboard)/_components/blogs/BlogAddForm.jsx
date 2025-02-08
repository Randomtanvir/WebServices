"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const BlogAddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    setCoverPhoto(e.target.files[0]); // Store file in state
  };
  console.log(coverPhoto);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (coverPhoto) {
      formData.append("coverPhoto", coverPhoto);
    }

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        router.push("/dashboard/blog");
      } else {
        console.error("Failed to create blog post");
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Blog Post</h1>
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
          {coverPhoto && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(coverPhoto)}
                alt="Cover Preview"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default BlogAddForm;
