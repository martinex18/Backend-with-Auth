
import jwt from "jsonwebtoken";
export  function CreateAceptToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
        payload,
        "KEYSECRET1233",
        {
            expiresIn: "1d"
        },
        (err, token) =>{
            if(err) reject(err)
            resolve(token)
        }
    )
  })
}