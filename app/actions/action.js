"use server";
import { signIn } from "@/auth";
import connectMongo from "@/db/dbConnect";

export const login = async (formData) => {
  await connectMongo();
  try {
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    return { success: true, response };
  } catch (error) {
    if (error["cause"]?.["err"]?.toString().includes("User not found")) {
      return { error: true, message: "User not found" };
    } else if (
      error["cause"]?.["err"]?.toString().includes("Email or password mismatch")
    ) {
      return { error: true, message: "Email or password mismatch" };
    } else {
      return { error: true, message: "Somthing went wrong" };
    }
  }
};
