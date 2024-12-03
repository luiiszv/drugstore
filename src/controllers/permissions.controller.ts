import { Request, Response } from "express";
import {
  insertPermission,
  findPermissions,
} from "../services/permissionService";

export const getPermissions = async (_req: Request, res: Response) => {
  try {
    const response = await findPermissions();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Somethig was wrong in getPermissions" });
  }
};

export const registerPermissions = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const response = await insertPermission(body);
    res.status(200).json({ message: "Permission registered successfully", response });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Somethig was wrong in registerPermissions", error });
  }
};
