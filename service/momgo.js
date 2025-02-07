import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_URI));
    console.log("DB CONNECTED");
    return conn;
  } catch (err) {
    console.error(err);
  }
}
