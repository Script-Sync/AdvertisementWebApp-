import {Router} from "express";
import { registerUser, loginUser } from "../Controllers/userContoller.js";
import { adminRegisterValidator } from "../Validators/adminValidator.js";

const userRouter = Router();

// User registration route
userRouter.post("/user/register", registerUser);

// User login route
userRouter.post("/user/login", loginUser);

export default userRouter;
