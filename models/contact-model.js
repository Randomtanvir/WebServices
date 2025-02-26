import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Regex to validate email
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10,15}$/, // Validate 10 to 15 digits for contact number
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
