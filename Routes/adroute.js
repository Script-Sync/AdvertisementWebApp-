import { Router } from "express";
import {
  addAdvert,
  deleteAdvert,
  getAdvertById,
  getAllAdverts,
  replaceAdvert,
} from "../Controllers/adController.js";
import { remoteUpload } from "../Middlewares/upload.js";

const advertsRouter = Router();

advertsRouter.post("/ads", remoteUpload.single("image"), addAdvert);

advertsRouter.get("/ads", getAllAdverts);

advertsRouter.get("/ads/:id", getAdvertById);

advertsRouter.put("/:id", remoteUpload.single("image"), replaceAdvert);

advertsRouter.delete("/:id", deleteAdvert);

export default advertsRouter;
