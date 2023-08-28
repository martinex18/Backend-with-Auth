import express from 'express'
const server = express()
import morgan from 'morgan'
import router_register from '../routes/auth.routes/register.js'
import router_login from '../routes/auth.routes/login.js'



server.use(morgan('dev'))
server.use(express.json())
server.use(router_login)
server.use(router_register)



export default server;