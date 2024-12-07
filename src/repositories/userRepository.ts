import UserModel from "../models/User";
import { UserInterface } from "../types/user.types";

export const getAll = async () => {
  return await UserModel.find();
};

export const createUser = async (user: UserInterface) => {
  return await UserModel.create(user);
};

export const findUserByEamil = async (email: string) => {
  return await UserModel.findOne({ email: email });
};

export const delteOneUser = async (_id: string) => {
  return await UserModel.deleteOne({ _id });
};
