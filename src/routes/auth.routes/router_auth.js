import Router  from "express";
import { registerUser, LoginUser } from "../../controllers/authController.js";
const router_auth = Router();
router_auth.post('/register', registerUser )
router_auth.post('/login', LoginUser)



export default router_auth;