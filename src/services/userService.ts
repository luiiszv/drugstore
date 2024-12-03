import UserModel from "../models/User";
import {hash} from "bcrypt";
import { UserInterface } from "../types/user.types";

/**
 * Registar usuario
 * @params user
 * @returns
 */

const insertUser = async (user: UserInterface) => {
  const passwordHashed = await hash(user.password, 10);
  const userPassHashed = { ...user, password: passwordHashed };
  const response = await UserModel.create(userPassHashed);
  return {
    success: true,
    message: "User registred",
    data: response
  };
};

/**
 * Consultar un usuario
 * @params email
 * @returns
 */
const getUser = async (email: string) => {
  const response = await UserModel.findOne({ email });
  return {
    success: true,
    message: "User Found",
    data: response
  };
};

/**
 * Consultar todos los usuarios
 * @params -
 * @returns Users
 */
const findUsers = async () => {
  const response = await UserModel.find();
  return {
    success: true,
    data: response
  };
};

/**
 * Elimiar usuarios
 * @params id_user
 * @returns
 */
const deleteUser = async (_id: string) => {
  const response = await UserModel.deleteOne({ _id });
  return {
    seccess: true,
    message: "User Deleted",
    data: response
  };
};
export { insertUser, getUser, findUsers, deleteUser };
