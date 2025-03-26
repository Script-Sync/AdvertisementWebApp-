import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const adminSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"],
    },
  },
  { timestamps: true }
);

adminSchema.plugin(normalize);

export const adminModel = model("Admin", adminSchema);
