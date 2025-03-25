import { Router } from "express";
import {
  addAdvert,
  deleteAdvert,
  getAdvertById,
  getAllAdverts,
  replaceAdvert,
} from "../Controllers/adController.js";
import { remoteUpload } from "../Middlewares/upload.js";
import { isAuthenticated, isAuthorized } from "../Middlewares/auth.js";

const advertsRouter = Router();

advertsRouter.post("/ads", isAuthenticated, isAuthorized(['superadmin','admin']), remoteUpload.array("image", 5), addAdvert);

advertsRouter.get("/ads", getAllAdverts);

advertsRouter.get("/ads/:id", getAdvertById);

advertsRouter.put("/:id", isAuthenticated, isAuthorized, remoteUpload.array("image", 5), replaceAdvert);

advertsRouter.delete("/:id", isAuthenticated,isAuthorized(['admin','superadmin']), deleteAdvert);

export default advertsRouter;
