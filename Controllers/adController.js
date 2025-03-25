import { adModel } from "../Models/adModel.js";
import { Types } from "mongoose";
import {
  addAdevertDetails,
  replaceAdvertdetails,
} from "../Validators/adValidator.js";

//Add new advert
export const addAdvert = async (req, res, next) => {
  try {
    const { error, value } = addAdevertDetails.validate({
      adminId: req.body.adminId,
      ...req.body,
      image: req.file?.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }
    await adModel.create(value);
    res.status(201).json({ message: "Advert Added" });
  } catch (error) {
    next(error);
  }
};

//Get all advert
export const getAllAdverts = async (req, res, next) => {
  try {
    const getAds = await adModel.find();
    res.status(200).json(getAds);
  } catch (error) {
    next(error);
  }
};

//Get advert by id
export const getAdvertById = async (req, res, next) => {
  try {
    const advert = await adModel.findById(req.params.id);
    if (advert) {
      res.status(200).json(advert);
    } else {
      res.status(404).json({ message: "Advert not found" });
    }
  } catch (error) {
    next(error);
  }
};

//Update an advert
export const replaceAdvert = async (req, res, next) => {
 // Validate incoming request (excluding image)
 const { error } = replaceAdvertdetails.validate(req.body);
 if (error) {
     return res.status(400).json({ message: error.details[0].message });
 }
 
 // Check if image was uploaded
 if (!req.file) {
     return res.status(400).json({ message: "Image is required" });
 }
 
 // Perform model replace operation
 const results = await adModel.findOneAndReplace(
     { _id: req.params.id },
     {
         ...req.body,
         image: req.file.filename
     },
     { new: true }
 );
 
 // Return a response
 if (!results) {
     return res.status(404).json({ message: "Advert not found" });
 }
 res.status(200).json({ results });
};


//Delete an Advert
export const deleteAdvert = async (req, res, next) => {
  const delAd = await adModel.findByIdAndDelete({
    _id: req.params.id,
  });
  if (!delAd) {
    return res.status(404).json({ message: "Advert not found" });
  }
  res.json({ message: "Advert removed" });
};
