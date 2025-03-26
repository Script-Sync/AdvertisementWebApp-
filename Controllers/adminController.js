import { adminModel } from "../Models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  adminLoginValidator,
  adminRegisterValidator,
  updateAdminValidator,
} from "../Validators/adminValidator.js";
import { sendEmail, sendEmailAdmin } from "../Utilities/mailing.js";

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
  const newAdmin = await adminModel.create({
    ...value,
    password: hashedPassword,
  });
  //Tomorrow Add send registration email to user
  res.status(201).json("Admin created successfully");
  // Admin Registration email
  const sendWelcomeEmail = sendEmailAdmin(
    newAdmin.email,
    ` ${newAdmin.username} Your Admin Portal`
  )
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
  const token = jwt.sign({ id: admin._id }, process.env.JWT_KEY, {
    expiresIn: "24h",
  });
  // Return response
  res
    .status(200)
    .json({ token, admin: { role: admin.role, email: admin.email } });
};

export const updateAdmin = async (req, res) => {
  const { error, value } = updateAdminValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }

  const result = await adminModel.findByIdAndUpdate(req.params.id, value, {
    new: true,
  });

  res.status(200).json(result);
};

export const getAuthenticatedAdmin = async (req, res, next) => {
  try {
    const result = await adminModel.findById(req.auth.id).select({
      password: false,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
