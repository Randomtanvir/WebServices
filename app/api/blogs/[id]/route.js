import connectMongo from "@/db/dbConnect";
import blogModel from "@/models/blog-model";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

//Get
export async function GET(req, { params }) {
  try {
    connectMongo();
    const { id } = await params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// PATCH
export async function PATCH(req, { params }) {
  try {
    await connectMongo();

    const { id } = await params; // Get blog ID from URL params
    if (!id) {
      return NextResponse.json(
        { message: "Blog ID is required" },
        { status: 400 }
      );
    }

    // Find the existing blog post
    const blog = await blogModel.findById(id);
    if (!blog) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    const formData = await req.formData();
    const title = formData.get("title") || blog.title;
    const content = formData.get("content") || blog.content;
    let imageUrl = blog.coverPhoto; // Keep existing image

    // If a new cover photo is uploaded
    const coverPhoto = formData.get("coverPhoto");
    if (coverPhoto && coverPhoto.size > 0) {
      const fileBuffer = await coverPhoto.arrayBuffer();

      const result = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ folder: "blog_covers" }, (error, result) =>
            error ? reject(error) : resolve(result)
          )
          .end(Buffer.from(fileBuffer));
      });

      imageUrl = result.secure_url; // Get new Cloudinary URL
    }

    // Update the blog post
    blog.title = title;
    blog.content = content;
    blog.coverPhoto = imageUrl;
    await blog.save();

    return NextResponse.json(
      { message: "Blog post updated", blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating blog post", error },
      { status: 500 }
    );
  }
}

//Delete
export async function DELETE(req, { params }) {
  try {
    await connectMongo();

    const { id } = await params; // Get blog ID from URL params
    if (!id) {
      return NextResponse.json(
        { message: "Blog ID is required" },
        { status: 400 }
      );
    }

    // Find and delete the blog post
    const deletedBlog = await blogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting blog post", error },
      { status: 500 }
    );
  }
}
