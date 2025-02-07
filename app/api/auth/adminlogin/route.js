import connectMongo from "@/db/dbConnect";
import { AdminModel } from "@/models/admin-model";
// import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectMongo();
    const { email, password } = await req.json();
    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 401 }
      );
    }

    // Verify password
    // const isMatch = await bcrypt.compare(password, admin.password);
    const isMatch = password === admin.password;
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Wrong password" }), {
        status: 401,
      });
    }

    // Return admin data
    return new Response(
      JSON.stringify({
        message: "Login successful",
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
