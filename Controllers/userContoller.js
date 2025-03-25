import { userModel } from "../Models/userModel.js";
import { sendEmail } from "../Utilities/mailing.js";
import { adminLoginValidator, adminRegisterValidator } from "../Validators/adminValidator.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Register User
export const registerUser = async (req, res, next) => {
  const { error, value } = adminRegisterValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  const user = await userModel.findOne({
    $or: [{ username: value.username }, { email: value.email }],
  });
  if (user) {
    return res
      .status(409)
      .json({ message: "Username or Email already exists" });
  }
  const hashedPassword = bcrypt.hashSync(value.password, 10);
  const newUser = await userModel.create({
    ...value,
    password: hashedPassword,
  });
  //Add send registration email to user
  const sendWelcomeEmail = sendEmail(
    newUser.email,
    `Hello ${ newUser.username}`
  );
  //response
  res.status(201).json("User created successfully");
};

export const loginUser = async (req, res, next) => {
  const { error, value } = adminLoginValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  const user = await userModel.findOne({
    $or: [{ username: value.username }, { email: value.email }],
  });
  if (!user) {
    return res.status(404).json({ message: "User does not exists" });
  }
  const correctPassword = bcrypt.compareSync(value.password, user.password);
  if (!correctPassword) {
    return res.status(401).json({ message: "Invalid Credential" });
  }
  // Generate access token for User
  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
    expiresIn: "24h",
  });
  // Return response
  res.status(200).json({ token });
};

// Get all products
export const getAllProducts = async (req, res) => {
  // Implement logic to retrieve all products
};

// Add to cart
export const addToCart = async (req, res) => {
  // Implement logic to add items to the user's cart
};
