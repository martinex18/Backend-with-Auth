import mongoose from "mongoose";

export const conexion = async () => {
    try{
        await mongoose.connect('mongodb+srv://Gabriel:Gabrielmbravo1805@cluster0.ufdnstb.mongodb.net/?retryWrites=true&w=majority')
        console.log('Database Connected')
    }catch(error){
        console.error(error)
    }
};
