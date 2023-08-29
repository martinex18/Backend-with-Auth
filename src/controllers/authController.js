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
    if (!email || !user || !password) {
      res.status(500).send("porfavor completa los campos");
    }
  }
};

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await UserRegister.findOne({ email }); // Find a single user based on the provided email

    if (!userFound) {
      return res.status(404).send("Usuario no encontrado");
    }

    const compare =  bcrypt.compare(password, userFound.password);

    if (compare) {
      
      const token = await CreateAceptToken({ id: userFound.id})
      res.cookie('token', token)
      res.send("Inicio de sesión exitoso");
    } else {
      res.status(401).send("Contraseña incorrecta");
    }
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
};
