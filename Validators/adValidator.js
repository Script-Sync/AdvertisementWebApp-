import Joi from "joi";


export const addAdevertDetails = Joi.object({
    name: Joi.string().required(),
    price:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string().required(),
    quantity: Joi.number().integer().required(),
    adminId:Joi.string().optional(),
    category: Joi.string().required().valid('Television & Accessories', 'Video Games', 'Computer Accessories', 'Audio Systems', 'Automotive', 'Smartphones'),
    rating: Joi.number().min(0).max(5).allow(null).optional(),
    
})

export const replaceAdvertdetails = Joi.object({
    name: Joi.string().required(),
    price:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string().required(),
    quantity: Joi.number().integer().required(),
    category: Joi.string().required().valid('Television & Accessories', 'Video Games', 'Computer Accessories', 'Audio Systems', 'Automotive', 'Smartphones'),
    rating: Joi.number().min(0).max(5).allow(null).optional()

})