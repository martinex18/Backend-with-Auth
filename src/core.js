import server from './addons/server.js'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 4000;
import { conexion } from './database/conexion.js';
const database = conexion()




// Server Start 
server.listen(port, () =>{
    console.log(`Servidor en marcha en el puerto ${port}`)
})