import connectMongo from "@/db/dbConnect";
import { Contact } from "@/models/contact-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    connectMongo();
    const contactInfo = await request.json();
    const { name, email, phone, message } = contactInfo;
    const newContact = await Contact.create({ name, email, phone, message });
    return NextResponse.json({
      success: true,
      message: "Contact message Send successfully",
      newContact,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
