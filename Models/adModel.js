import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const ad = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

ad.plugin(normalize);

export const adModel = model("Ad", ad);
