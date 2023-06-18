import User from "../../models/users.js";
import Auth from "../../middleware/Auth.js";
// import Mail from "../../config/mail.js";
import dotenv from "dotenv";
// import ForgotPassword from "../../models/ForgotPassword.js";
import bcrypt from "bcrypt";

dotenv.config();

class AuthController {

    async getLoginUser(req, res) {
        const token = req.headers.authorization;
        if (token) {
            let response = Auth.verifyToken(token);
            if (response) {
                let user = await User.findOne({_id: response.id});
                res.status(200).json({
                    success: true,
                    user: user
                });

            } else {
                res.status(200).json({
                    error: "Token is not valid"
                });
            }
        }
    }

}
   

  
export default AuthController