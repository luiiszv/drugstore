import { sign } from "jsonwebtoken";

export const createAccessToken = (payload: object): Promise<string> => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT secret is not defined in environment variables");
  }
  return new Promise((resolve, reject) => {
    sign(payload, secret, { expiresIn: "1d" }, (err, token) => {
      if (err) return reject(err);
      resolve(token!);
    });
  });
};
