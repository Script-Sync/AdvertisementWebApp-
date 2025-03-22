import { Schema, Types, model } from "mongoose";
import normalize from "normalize-mongoose";

const ad = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    adminId: { type: Types.ObjectId, required: true, ref: "Admin" },
  },
  { timestamps: true }
);

ad.plugin(normalize);

export const adModel = model("Ad", ad);
