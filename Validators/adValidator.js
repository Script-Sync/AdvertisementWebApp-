import Joi from "joi";


export const addAdevertDetails = Joi.object({
    name: Joi.string().required(),
    price:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string().required()
});