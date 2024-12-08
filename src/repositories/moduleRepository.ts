import ModuleShema from "../models/Module";
import { ModuleInterface } from "../types/module.types";

export const createModule = async (module: ModuleInterface) => {
  return await ModuleShema.create(module);
};

export const findModuleById = async (_id: any) => {
  return await ModuleShema.findById(_id);
};

export const findModuleByNameOrUrl = async (name: string, url: string) => {
  return ModuleShema.findOne({ $or: [{ name: name }, { url: url }] });
};

export const getAllModules = async () => {
  return await ModuleShema.find();
};
