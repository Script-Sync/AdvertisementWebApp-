import { expressjwt } from "express-jwt";
import { adminModel } from "../Models/adminModel.js";
import { userModel } from "../Models/userModel.js";

export const isAuthenticated = expressjwt({
  secret: process.env.JWT_KEY,
  algorithms: ["HS256"],
});

export const isAuthorized = (roles) => {
  return async (req, res, next) => {
    const admin = await adminModel.findById(req.auth.id);
    // console.log(admin);
    if (roles?.includes(admin.role)) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  };
};
// export const userAuthorized = (roles) => {
//   return async (req, res, next) => {
//     const user = await userModel.findById(req.auth.id);
//     if (roles?.includes(user.role)) {
//       next();
//     } else {
//       res.status(403).json("You are not authorized");
//     }
//   };
// };
