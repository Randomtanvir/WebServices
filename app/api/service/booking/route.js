import connectMongo from "@/db/dbConnect";
import { ServiceBooking } from "@/models/service-booking";
import { NextResponse } from "next/server";

export const POST = async (request, _response) => {
  await connectMongo();
  try {
    const bookingInfo = await request.json();
    const {
      fullName,
      email,
      webLink,
      contact,
      address,
      city,
      country,
      postalCode,
      serviceType,
      aboutMe,
    } = bookingInfo;
    const NewBookingInfo = {
      fullName,
      email,
      webLink,
      contact,
      address,
      city,
      country,
      postalCode,
      serviceType,
      aboutMe,
    };
    await ServiceBooking.create(NewBookingInfo);
    return NextResponse.json({ success: true, message: "Booking Successfull" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
