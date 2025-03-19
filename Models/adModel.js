import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose"

export const adSchema = new Schema({
    name: {type:String, required:true},
    price:{tyep:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    quantity:{type: Number, required:true}

},{timestamps:true});

adSchema.plugin(normalize)

export const adModel = model('Ad', adSchema)