import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    user:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        trim: true
    }
},{
    timestamps: true
})


export default mongoose.model("UserRegister", registerSchema);