import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: Buffer, // Change to Buffer for storing image binary data
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export const AdminModel =
  mongoose.models.admin || mongoose.model("admin", adminSchema);
