import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "user",
      enum: ["user","superadmin"],
    },
  },
  { timestamps: true }
);

userSchema.plugin(normalize);

export const userModel = model("User", userSchema);
