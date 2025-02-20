import connectMongo from "@/db/dbConnect";
import { ServiceBooking } from "@/models/service-booking";
import { NextResponse } from "next/server";

export const GET = async (request, response) => {
  await connectMongo();
  try {
    const serviceBooking = await ServiceBooking.find({});
    return NextResponse.json({
      success: true,
      message: "Service bookig list fetch success",
      serviceBooking,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
