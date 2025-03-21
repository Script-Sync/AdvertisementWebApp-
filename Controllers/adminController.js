import { adminModel } from "../Models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  adminLoginValidator,
  adminRegisterValidator,
  updateAdminValidator,
} from "../Validators/adminValidator.js";

//Register Admin
export const registerAdmin = async (req, res, next) => {
  const { error, value } = adminRegisterValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  const admin = await adminModel.findOne({
    $or: [{ username: value.username }, { email: value.email }],
  });
  if (admin) {
    return res
      .status(409)
      .json({ message: "Username or Email already exists" });
  }
  const hashedPassword = bcrypt.hashSync(value.password, 10);
  await adminModel.create({
    ...value,
    password: hashedPassword,
  });
  //Tomorrow Add send registration email to user
  res.status(201).json("Admin created successfully");
};

export const adminLogin = async (req, res, next) => {
  const { error, value } = adminLoginValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  const admin = await adminModel.findOne({
    $or: [{ username: value.username }, { email: value.email }],
  });
  if (!admin) {
    return res.status(404).json({ message: "Admin does not exists" });
  }
  const correctPassword = bcrypt.compareSync(value.password, admin.password);
  if (!correctPassword) {
    return res.status(401).json({ message: "Invalid Credential" });
  }
  // Generate access token for admin
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
  // Return response
  res.status(200).json({ token });
};

export const updateAdmin = async (req, res) => {
  const {error, value} = updateAdminValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error)
  }

  const result = await adminModel.findByIdAndUpdate(req.params.id,value,{new:true})
   
  res.status(200).json(result)
}