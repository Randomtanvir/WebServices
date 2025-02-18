import connectMongo from "@/db/dbConnect";
import { Service } from "@/models/service-model";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req) => {
  try {
    connectMongo();
    const formData = await req.formData();

    const serviceName = formData.get("serviceName");
    const serviceDescription = formData.get("serviceDescription");
    const serviceLogo = formData.get("serviceLogo");

    let logoUrl = "";
    if (serviceLogo && serviceLogo.size > 0) {
      const fileBuffer = await serviceLogo.arrayBuffer();
      const result = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ folder: "service_logo" }, (error, result) =>
            error ? reject(error) : resolve(result)
          )
          .end(Buffer.from(fileBuffer));
      });
      logoUrl = result.secure_url;
    }

    const newService = await Service.create({
      serviceName,
      serviceDescription,
      serviceLogo: logoUrl,
    });
    console.log(newService);
    return NextResponse.json({
      success: true,
      message: "Service create successfully",
      newService,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Service create failed",
    });
  }
};
