import  express from "express";
import AuthController from "../controllers/auth/authcontroller.js";

let authRouter = express.Router();
let aInstance = new Authcontroller();

let authController = new Authcontroller();

authRouter.post('/', aInstance.login);

export default authRouter;