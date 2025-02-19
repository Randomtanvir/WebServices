import mongoose, { Schema } from "mongoose";
const ServiceBookingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Regex to validate email
    },
    webLink: {
      type: String,
      match: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?[\w-.?=%&@]*)$/, // Regex for URL validation
      required: false,
    },
    contact: {
      type: String,
      required: true,
      match: /^[0-9]{10,15}$/, // Validate 10 to 15 digits for contact number
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    aboutMe: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ServiceBooking =
  mongoose.models.ServiceBooking ||
  mongoose.model("ServiceBooking", ServiceBookingSchema);
