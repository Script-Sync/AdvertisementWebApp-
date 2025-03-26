import Joi from "joi";


export const addAdevertDetails = Joi.object({
    name: Joi.string().required(),
    price:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string().required(),
    quantity: Joi.number().integer().required(),
    adminId:Joi.string().optional(),
    category: Joi.string().required().valid('Television & Accessories', 'video Games', 'Computer Accessories', 'Audio Systems'),
    quantity: Joi.number().integer().required()
})

export const replaceAdvertdetails = Joi.object({
    name: Joi.string().required(),
    price:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string().required(),
    quantity: Joi.number().integer().required(),
    adminId:Joi.string().required()
})