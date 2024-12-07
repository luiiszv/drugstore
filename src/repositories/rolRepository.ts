import RolShema from "../models/Rol";
import { RolInterface } from "../types/rol.types";

export const createRol = async (rol: RolInterface) => {
  return await RolShema.create(rol);
};

export const getAllRols = async () => {
  return await RolShema.find();
};

export const findAndDeleteRol = async (_id: string) => {
  await RolShema.findByIdAndDelete(_id);
};
