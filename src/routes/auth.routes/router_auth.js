import Router  from "express";
import { registerUser, LoginUser, Logout, Profile } from "../../controllers/authController.js";
import { validationToken } from "../../helpers/validationToken.js";
const router_auth = Router();
router_auth.post('/register', registerUser )
router_auth.post('/login', LoginUser)
router_auth.post('/logout', Logout)
router_auth.get('/profile', validationToken, Profile)



export default router_auth;