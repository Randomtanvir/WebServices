import connectMongo from "@/db/dbConnect";
import { userModel } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { fullName, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = {
    name: fullName,
    email,
    password: hashedPassword,
  };
  try {
    await connectMongo();
    const found = await userModel.findOne({ email });
    if (found) {
      return new NextResponse("User already exists", { status: 409 });
    }
    await userModel.create(newUser);
    return new NextResponse("User create success", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
