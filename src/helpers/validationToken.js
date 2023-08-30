import jwt from "jsonwebtoken";

export const validationToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send("No estás logueado. Por favor, inicia sesión.");
  }

  try {
    const decodedToken = jwt.verify(token, "KEY-SECRET-XXX"); 
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send("Error al verificar el token. Inicia sesión nuevamente.");
  }
};
