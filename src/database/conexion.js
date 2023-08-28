import mongoose from "mongoose";

export const conexion = async () => {
    try{
        await mongoose.connect(process.env.DB)
        console.log('Database Connected')
    }catch(error){
        console.error(error)
    }
};
