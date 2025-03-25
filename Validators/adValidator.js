import Joi from "joi";


export const addAdevertDetails = Joi.object({
    name: Joi.string().required(),
    price:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.array().items(Joi.string().required()),
    quantity: Joi.number().integer().required(),
    adminId:Joi.string().required()
})

export const replaceAdvertdetails = Joi.object({
    name: Joi.string().required(),
    price:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.array().items(Joi.string().required()),
    quantity: Joi.number().integer().required(),
    adminId:Joi.string().required()
})