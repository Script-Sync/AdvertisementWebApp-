import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose"

export const adminSchema = new Schema({
    username: {type:String, required:true},
    email:{tyep:String, required:true},
    password:{type:String, required:true}

},{timestamps:true});

adminSchema.plugin(normalize)

export const adminModel = model('Admin', adminSchema)