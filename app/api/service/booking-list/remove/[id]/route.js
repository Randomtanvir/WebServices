import connectMongo from "@/db/dbConnect";
import { ServiceBooking } from "@/models/service-booking";
import { NextResponse } from "next/server";

export const DELETE = async (_request, { params }) => {
  await connectMongo();
  const { id } = await params;
  try {
    const deleteBookingList = await ServiceBooking.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      message: "Booking Item Delete successfully",
      deleteBookingList,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
