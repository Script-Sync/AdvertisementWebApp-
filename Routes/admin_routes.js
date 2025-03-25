import { Router } from "express";
import { adminLogin, getAuthenticatedAdmin, registerAdmin, updateAdmin } from "../Controllers/adminController.js";
import { isAuthenticated } from "../Middlewares/auth.js";



const adminRouter = Router();

adminRouter.post('/admin/register', registerAdmin);

adminRouter.post('/admin/login', adminLogin);


adminRouter.get('/users/me', isAuthenticated, getAuthenticatedAdmin)

adminRouter.patch('/admin/:id', updateAdmin)
//adminRouter.patch('/admin/:id', updateUser )



export default adminRouter;