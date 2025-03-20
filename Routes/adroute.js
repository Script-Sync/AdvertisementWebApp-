import { Router } from "express";




const advertsRouter = Router();

advertsRouter.post('./ads', addAdvert);

advertsRouter.get('./ads',getAdvert);

advertsRouter.get('./ads/:id', getAdvertById);

advertsRouter.put('/ads/:id', replaceAdvert);

advertsRouter.delete('./:id', deleteAdvert);


export default advertsRouter;



