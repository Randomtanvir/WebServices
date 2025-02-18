import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    serviceDescription: {
      type: String,
      required: true,
    },
    serviceLogo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);
