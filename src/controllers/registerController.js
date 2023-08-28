import UserRegister from '../models/registerModel.js'
import bcrypt from 'bcrypt'



export const registerUser = async (req, res) => {
    const { email, user, password } = req.body
    const PassEncry = await bcrypt.hash(password, 15)
    const registerUser =  new UserRegister({
        email,
        user,
        password: PassEncry
    })
    await registerUser.save()
    res.json(registerUser)
};
