import connectMongo from "@/db/dbConnect";
import { Service } from "@/models/service-model";
import { NextResponse } from "next/server";

export const GET = async (request, response) => {
  try {
    await connectMongo();
    const services = await Service.find({});
    return NextResponse.json({
      success: true,
      message: "Data fetch success",
      services,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error?.message || "Data fetch faild",
    });
  }
};
