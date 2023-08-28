import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    email:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    }
})


export default mongoose.model("UserLogin", loginSchema);