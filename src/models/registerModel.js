import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        trim: true
    },
    user:{
        type: String,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        trim: true
    }
})


export default mongoose.model("UserRegister", registerSchema);