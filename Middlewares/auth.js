import { expressjwt } from "express-jwt";
import { adminModel } from "../Models/adminModel.js";

export const isAuthenticated = expressjwt({
  secret: process.env.JWT_SECRET_KEY,
  algorithms: ["HS256"],
});

export const isAuthorized = (roles) => {
  return async (req, res, next) => {
    const user = await adminModel.findById(req.auth.id);
    if (roles?.includes(user.role)) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  };
};
