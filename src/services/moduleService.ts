import { ModuleInterface } from "../types/module.types";
import {
  createModule,
  findModuleByNameOrUrl,
  findModuleById,
  getAllModules,
} from "../repositories/moduleRepository";

/**
 * Consultar Modulos
 * @param
 * @returns Modules
 */
const findModules = async () => {
  const modules = await getAllModules();
  return {
    success: true,
    data: modules,
  };
};

/**
 * Registrar Modulo
 * @params module
 * @returns Modules
 */

const insertModules = async (module: ModuleInterface) => {
  const { name, url } = module;
  const moduleExist = await findModuleByNameOrUrl(name, url);
  if (moduleExist) {
    return {
      success: false,
      message: "The module already exists with the name or URL.",
    };
  }

  const newMoule = await createModule(module);

  return {
    success: true,
    message: "Module created successfully.",
    data: newMoule,
  };
};

/**
 * Consultar un Modulo
 * @params _idModule
 * @returns Module
 */

const findModule = async (id_module: string) => {
  const module = await findModuleById(id_module);
  return {
    success: true,
    message: "module found",
    data: module,
  };
};

export { findModules, insertModules, findModule };
