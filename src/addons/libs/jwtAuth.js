import jwt from "jsonwebtoken";

const secretKey = "KEY-SECRET-XXX";
const tokenExpiration = "1d";

export async function createAccessToken(payload) {
  try {
    const token =  jwt.sign(payload, secretKey, {
      expiresIn: tokenExpiration
    });
    return token;
  } catch (error) {
    throw new Error("Error creating access token: " + error.message);
  }
}
