import { Response, Request } from "express";
import {
  insertPermission,
  findOnePermission,
  findPermissions,
} from "../services/permissionService";

export const createPermission = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertPermission(body);
    res.status(200).json(response);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Somethis went wrong in createPermission " });
  }
};

export const getAllPermissions = async (_req: Request, res: Response) => {
  try {
    const response = await findPermissions();
    res.status(200).json(response);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Somethis went wrong in getAllPermissions " });
  }
};

export const getOnePermission = async ({ params }: Request, res: Response) => {
  try {
    const response = await findOnePermission(params.id);
    res.status(200).json(response);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Somethis went wrong in getOnePermission " });
  }
};
