import { Router } from "express";
import { adminLogin, registerAdmin } from "../Controllers/adminController.js";



const adminRouter = Router();

adminRouter.post('/admin/register', registerAdmin);

adminRouter.post('/admin/login', adminLogin);

//adminRouter.patch('/admin/:id', updateUser )


export default adminRouter;