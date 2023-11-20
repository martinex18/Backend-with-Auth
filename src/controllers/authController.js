import UserRegister from "../models/registerModel.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../addons/libs/jwtAuth.js";

export const registerUser = async (req, res) => {
  const { email, user, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserRegister({
      email,
      user,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    const token = await createAccessToken({
      id: savedUser._id,
      email: savedUser.email,
      user: savedUser.user,
    });
    res.cookie("token", token);
    res.status(200).send("Usuario creado");
  } catch (error) {
    if (error.code === 11000) {
      res.status(500).send("Usuario o correo electrónico ya existen");
    } else if (!email || !user || !password) {
      res.status(500).send("Por favor completa los campos");
    } else {
      res.status(500).send("Error en el servidor");
    }
  }
};

export const LoginUser = async (req, res) => {
  const { user, password } = req.body;

  try {
    const userFound = await UserRegister.findOne({ user });
    if (!userFound) {
      return res.status(404).send("Usuario no encontrado");
    }

    const passwordMatch = await bcrypt.compare(password, userFound.password);

    if (passwordMatch) {
      const token = await createAccessToken({ id: userFound.id });
      res.cookie("token", token);
      res.status(200).send('Inicio Exitoso!');
    } else {
      res.status(401).send("Contraseña incorrecta");
    }
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
};

export const Logout = (req, res) => {
  res.cookie("token", "");
  res.send("Sesión cerrada");
};

export const Profile = async (req, res) => {
  const userFound = await UserRegister.findById(req.user.id)
  if(!userFound){
    res.status(500).send('Usuario no encontrado')
  }
  return res.json({
    id: userFound._id,
    email: userFound.email,
    user: userFound.user
  })
};
