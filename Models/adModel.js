import { Schema, model, Types } from "mongoose";
import normalize from "normalize-mongoose";

const ad = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: [{ type: String, required: true }],
    quantity: { type: Number, required: true },
    category:{type:String, required:true, enum:['Television & Accessories', 'Video Games', 'Computer Accessories','Audio Systems', 'Automotive', 'Smartphones']},
    rating: { type: Number, min: 0, max: 5 },
    adminId: { type: Types.ObjectId, required: false, ref: "Admin" },
  },
  { timestamps: true }
);

ad.plugin(normalize);

export const adModel = model("Ad", ad);
