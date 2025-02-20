"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

const BlogForm = ({ blog }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(blog?.coverPhoto || null);
  const router = useRouter();

  useEffect(() => {
    if (blog) {
      setValue("title", blog.title || "");
      setValue("content", blog.content || "");
      setCoverPhoto(blog.coverPhoto || null); // Handle initial image
    }
  }, [blog, setValue]);

  const handleImageChange = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setCoverPhoto(acceptedFiles[0]);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);

    // If cover photo is a new file, append it to the formData
    if (coverPhoto && typeof coverPhoto !== "string") {
      formData.append("coverPhoto", coverPhoto);
    } else if (coverPhoto && typeof coverPhoto === "string") {
      // If the cover photo is an existing URL, append it as is
      formData.append("coverPhoto", coverPhoto);
    }

    try {
      const res = blog
        ? await fetch(`/api/blogs/${blog._id}`, {
            method: "PATCH",
            body: formData,
          })
        : await fetch("/api/blogs", {
            method: "POST",
            body: formData,
          });

      if (res.ok) {
        router.push("/dashboard/blog");
        toast.success("Blog Saved Successfully");
      } else {
        toast.error("Failed to save blog post");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleImageChange,
    accept: "image/*",
    multiple: false,
  });

  const renderCoverPhotoPreview = () => {
    // If it's a file, generate a preview URL
    if (coverPhoto && typeof coverPhoto !== "string") {
      return URL.createObjectURL(coverPhoto);
    }
    // If it's a URL string, return the URL directly
    if (coverPhoto && typeof coverPhoto === "string") {
      return coverPhoto;
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        {blog ? "Edit Blog Post" : "Add New Blog Post"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Title Input */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...control.register("title", { required: "Title is required" })}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Content Input */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Content
          </label>
          <textarea
            {...control.register("content", {
              required: "Content is required",
            })}
            rows={6}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your content here"
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        {/* Cover Photo */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Cover Photo
          </label>
          <div
            {...getRootProps()}
            className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
          >
            <input {...getInputProps()} />
            <span className="text-gray-500">
              Drag & drop or click to upload
            </span>
            {renderCoverPhotoPreview() && (
              <div className="mt-4 w-full h-48 overflow-hidden rounded-lg">
                <img
                  src={renderCoverPhotoPreview()}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          {errors.coverPhoto && (
            <p className="text-red-500 text-sm mt-1">
              {errors.coverPhoto.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white rounded my-2 py-3 hover:bg-purple-800 cursor-pointer transition flex justify-center items-center"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : blog ? (
              "Update Blog"
            ) : (
              "Add Blog"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
