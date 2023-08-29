import Router  from "express";
import { registerUser } from "../../controllers/authController.js";
const router_auth = Router();
router_auth.post('/register', registerUser )



export default router_auth;