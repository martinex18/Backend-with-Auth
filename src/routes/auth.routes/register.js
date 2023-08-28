import Router  from "express";
const router_register = Router();
import { registerUser } from "../../controllers/registerController.js";
router_register.post('/register', registerUser )



export default router_register;