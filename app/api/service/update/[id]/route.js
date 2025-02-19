import connectMongo from "@/db/dbConnect";
import { Service } from "@/models/service-model";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

//service getByid from mongoBD
export const GET = async (request, { params }) => {
  const { id } = await params;
  try {
    await connectMongo();
    if (!id) {
      return NextResponse.json({
        succes: false,
        message: "invalid service id",
      });
    }
    const service = await Service.findById(id);
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({
      succes: false,
      message: error.message || "somthing went wrong",
    });
  }
};

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//Servicr update api
export const PATCH = async (request, { params }) => {
  const { id } = await params;
  await connectMongo();
  try {
    const service = await Service.findById(id);
    const formData = await request.formData();
    const serviceName = formData.get("serviceName");
    const serviceDescription = formData.get("serviceDescription");
    const serviceLogo = formData.get("serviceLogo");
    let logoUrl = service.serviceLogo;

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

    service.serviceName = serviceName;
    service.serviceDescription = serviceDescription;
    service.serviceLogo = logoUrl;
    await service.save();
    return NextResponse.json({
      success: true,
      message: "Service update successfully",
    });
  } catch (error) {
    return NextResponse.json({
      succes: false,
      message: error.message,
    });
  }
};
