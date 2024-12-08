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
  const { name, url, parent } = module;

  // búsquedas en paralelo ✔
  const [moduleExist, parentExist] = await Promise.all([
    findModuleByNameOrUrl(name, url),
    parent ? findModuleById(parent) : Promise.resolve(true), // Si no hay parent, retorna true
  ]);

  if (moduleExist) {
    return {
      success: false,
      message: "The module already exists with the name or URL.",
    };
  }

  if (!parentExist) {
    return {
      success: false,
      message: "The parent module id does not exist.",
    };
  }

  // Crear el módulo una vez validados los datos
  const newModule = await createModule(module);

  return {
    success: true,
    message: "Module created successfully.",
    data: newModule,
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
