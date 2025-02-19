import connectMongo from "@/db/dbConnect";
import { Service } from "@/models/service-model";
import { NextResponse } from "next/server";

export const DELETE = async (_req, { params }) => {
  const { id } = await params;
  console.log(id);
  await connectMongo();
  try {
    const deleteService = await Service.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      message: "Service Delete successfully",
      deleteService,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Service Delete filed",
    });
  }
};
