import { Request, Response } from "express";
import { getUser, insertUser, findUsers } from "../services/userService";

export const registerUsers = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const user = await insertUser(body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Something was wrong in registerUsers", error });
  }
};

export const getUserDetail = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const user = await getUser(body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Something was wrong in getUserDetail", error });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await findUsers();
    res.status(200).json( users );
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something was wrong in getAllUsers", error });
  }
};
