import UserRegister from "../models/registerModel.js";
import bcrypt from "bcrypt";
import { CreateAceptToken } from "../addons/libs/jwtAuth.js";

export const registerUser = async (req, res) => {
  const { email, user, password } = req.body;
  try {
    const PassEncry = await bcrypt.hash(password, 10);
    const newUser = new UserRegister({
      email,
      user,
      password: PassEncry,
    });
    const UserSave = await newUser.save();
    const token = await CreateAceptToken({
      id: UserSave._id,
      email: UserSave.email,
      user: UserSave.user,
    });
    res.cookie("token", token);
    res.json("msg: usuario creado");
  } catch (error) {
    if (error.code === 11000) {
      res.status(500).send("Usuario o correo electronico ya existen");
    }
    if( !email || !user || !password ){
      res.status(500).send('porfavor completa los campos')
    }
    
  }
};
