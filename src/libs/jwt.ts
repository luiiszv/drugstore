import { sign } from "jsonwebtoken";

export const createAccessToken = (payload: object) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT secret is not defined in environment variables");
  }
  new Promise((resolve, reject) => {
    sign(payload, secret, { expiresIn: "1d" }, (err, token) => {
      if (err) return reject(err);
      resolve(token);
    });
  });
};
