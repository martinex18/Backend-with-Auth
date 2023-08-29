import UserRegister from "../models/registerModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { email, user, password } = req.body;
  try {
    const PassEncry = await bcrypt.hash(password, 15);
    const registerUser = new UserRegister({
      email,
      user,
      password: PassEncry,
    });
    await registerUser.save();
    res.status(200).send("Usuario creado.");
  } catch (error) {
    if (error.code === 11000) {
      res.status(500).send("Usuario o correo electronico ya existen");
    }
  }
};
