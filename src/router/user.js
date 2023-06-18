import express from "express";
import Usercontroller from "../controllers/usercontroller.js";

let userRouter = express.Router();

let userInstance = new Usercontroller();

userRouter.get('/', userInstance.index)
userRouter.post('/', userInstance.store)

export default userRouter;