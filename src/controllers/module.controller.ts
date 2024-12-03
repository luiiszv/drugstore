import { Request, Response } from "express";
import {
  insertModules,
  findModule,
  findModules,
} from "../services/moduleService";

export const getModules = async (_req: Request, res: Response) => {
  try {
    const response = await findModules();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong in getModules" });
  }
};

export const registerModule = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const response = await insertModules(body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong inregisterModule" });
  }
};

export const getModule = async ({params}: Request, res: Response) => {
  try {
    const response = await findModule(params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong inregisterModule" });
  }
};
