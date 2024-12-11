import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { jwtData } from "../types/express";

const validateToken = (token: string) => {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("No hay secreto en .env");
    }
    const decodedToken = jwt.verify(token, secret) as jwtData;

    return decodedToken;
  } catch (error) {
    return null;
  }
};

export const authMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authorization =
      req.headers.authorization || req.headers["cookie"]?.split("=")[1];

    if (!authorization) {
       _res.status(401).json({ error: "Token no proporcionado" });
       return
    }

    const validation = validateToken(authorization);

    if (validation === null){

      _res.status(401).json({ message: "Access Denied" });
      return
    }
    req.user = validation;

    return next();
  } catch (error) {
    _res
      .status(500)
      .json({ error: "Error interno en el middleware de autenticación" });

      return
  }
};
