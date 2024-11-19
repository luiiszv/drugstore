import { Request, Response } from "express";
import { findRoles, InsertRoles } from "../services/rolService";

export const getRoles = async (_req: Request, res: Response) => {
  try {
    const response = await findRoles();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Something was wrong in GetRoles", error });
  }
};

export const registerRoles = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const response = await InsertRoles(body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Something was wrong in registerRoles", error });
  }
};
