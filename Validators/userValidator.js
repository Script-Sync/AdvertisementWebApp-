import Joi from "joi";

// User validation schema
export const userValidator = Joi.object({
   username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  }).with("password", "confirmPassword");

// Middleware to validate user input
export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(err => err.message) });
  }
  next();
};