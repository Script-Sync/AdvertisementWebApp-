import { Router } from "express";



const adminRouter = Router();

adminRouter.post('./admin/register', registerAdmin);

adminRouter.post('/admin/login', loginAdmin);

adminRouter.patch('./admin/:id', updateUser )


export default adminRouter;