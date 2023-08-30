import express from 'express'
const server = express()
import morgan from 'morgan'
import router_auth from '../../routes/auth.routes/router_auth.js'
import cookieParser from 'cookie-parser'




server.use(morgan('dev'))
server.use(express.json())
server.use(cookieParser())
server.use(router_auth)




export default server;