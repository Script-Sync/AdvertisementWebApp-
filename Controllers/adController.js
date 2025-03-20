import {adModel} from "../Models/adModel.js"
import { addAdevertDetails } from "../Validators/adValidator.js"


//Add new advert
export const addAdvert = async(req, res, next) =>{
    try {
        const {error, value} = addAdevertDetails.validate({
            ...req.body,
            image: req.file?.filename,
        });
        if (error) {
            return res.status(422).json(error);
        }
        await adModel.create(value);
        res.status(201).json({message:"Advert Added"});
    } catch (error) {
        next(error);
    }
};

//Get all advert
export const getAllAdverts = async(req, res, next) =>{
    try {
        const getAds = await adModel.find();
        res.status(200).json(getAds);
    } catch (error) {
        next(error);
    }
};

//Get advert by id
export const getAdvertById = async(req, res, next) =>{
    try {
        const advert = await adModel.findById(req.params.id);
        if (advert) {
            res.status(200).json(advert);
        } else {
            res.status(404).json({message: "Advert not found"});
        }
    } catch (error) {
        next(error);
    }
};


//Update an advert
export const updateAdvert = async(req, res, next) =>{
    try {
        const {id} = req.params;
        const {price, quantity} = req.body;
        const updateAd = await adModel.findByIdAndUpdate(
            id,
            {price, quantity},
            {new:true}
        );
        if (updateAd) {
            res.status(200).json({message: "Advert updated", updateAd});
        }else {
            res.status(404).json({message: "Advert not found"});
        }
    } catch (error) {
        next(error);
    }
};

//Delete an Advert
export const deleteAdvert = async(req, res, next) =>{
    try {
        const {id} = req.params;
        await adModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Advert deleted",
        });
    } catch (error) {
        next(error);
    }
};