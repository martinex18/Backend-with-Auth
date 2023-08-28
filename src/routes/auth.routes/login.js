import Router  from "express";
const router_login = Router();

router_login.get('/login', (req, res) => res.send('Login') )

export default router_login;
