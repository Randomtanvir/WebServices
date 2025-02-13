import connectMongo from "@/db/dbConnect";
import { User } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { username, email, password, role } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = {
    username,
    email,
    password: hashedPassword,
    image: "",
    role,
  };
  try {
    await connectMongo();
    const found = await User.findOne({ email });
    if (found) {
      return new NextResponse("User already exists", { status: 409 });
    }
    await User.create(newUser);
    return new NextResponse("User create success", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
