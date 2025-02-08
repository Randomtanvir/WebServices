import connectMongo from "@/db/dbConnect";
import cloudinary from "cloudinary";
import blogModel from "@/models/blog-model";
import { NextResponse } from "next/server";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    await connectMongo();
    const formData = await req.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const coverPhoto = formData.get("coverPhoto"); // File from FormData

    let imageUrl = ""; // Default empty string

    if (coverPhoto && coverPhoto.size > 0) {
      const fileBuffer = await coverPhoto.arrayBuffer(); // Convert Blob to Buffer

      const result = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream(
            { folder: "blog_covers" }, // Cloudinary folder
            (error, result) => (error ? reject(error) : resolve(result))
          )
          .end(Buffer.from(fileBuffer));
      });

      imageUrl = result.secure_url; // Get Cloudinary URL
    }
    const newBlog = await blogModel.create({
      title,
      content,
      coverPhoto: imageUrl,
    });

    return NextResponse.json(
      { message: "Blog post added", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating blog post", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongo();
    const blogs = await blogModel.find().sort({ createdAt: -1 }).lean(); // Fetch latest blogs first

    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching blogs", error },
      { status: 500 }
    );
  }
}
