import { Router } from "express";
import {
  addAdvert,
  deleteAdvert,
  getAdvertById,
  getAllAdverts,
  replaceAdvert,
} from "../Controllers/adController.js";
import { productImageUpload, productPicturesUpload, remoteUpload } from "../Middlewares/upload.js";
import { isAuthenticated, isAuthorized } from "../Middlewares/auth.js";

const advertsRouter = Router();

advertsRouter.post("/ads", isAuthenticated, isAuthorized(['superadmin','admin']), productImageUpload.single("image"), addAdvert);

advertsRouter.get("/ads", getAllAdverts);

advertsRouter.get("/ads/:id", getAdvertById);

advertsRouter.put("/:id", isAuthenticated, isAuthorized(['admin','superadmin']), productImageUpload.single("image"), replaceAdvert);

advertsRouter.delete("/:id", isAuthenticated,isAuthorized(['admin','superadmin']), deleteAdvert);

export default advertsRouter;
