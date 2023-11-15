import express from 'express'
const server = express()
import morgan from 'morgan'
import router_auth from '../../routes/auth.routes/router_auth.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'



server.use(cors('*'))
server.use(morgan('dev'))
server.use(express.json())
server.use(cookieParser())
server.use('/api',router_auth)




export default server;