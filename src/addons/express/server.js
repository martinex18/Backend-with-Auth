import express from 'express'
const server = express()
import morgan from 'morgan'
import router_auth from '../../routes/auth.routes/router_auth.js'




server.use(morgan('dev'))
server.use(express.json())
server.use(router_auth)




export default server;