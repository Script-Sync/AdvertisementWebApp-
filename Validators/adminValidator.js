import Joi from "joi";


export const adminRegisterValidator = Joi.object.keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
}).with("password", "confirmPassword");

export const adminLoginValidator = Joi.object.keys({
    username:Joi.string().optional(),
    email: Joi.string().email().optional(),
    password:Joi.string().required(),
});