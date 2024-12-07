import { RolInterface } from "../types/rol.types";
import { createRol, getAllRols, findAndDeleteRol } from "../repositories/rolRepository";

/**
 * Consultar Roles
 * @params
 * @returns
 */

const findRoles = async () => {
  const roles = await getAllRols();
  return {
    susccess: true,
    data: roles,
  };
};

/**
 * Registrar Roles
 * @params
 * @returns
 */

const InsertRoles = async (rol: RolInterface) => {

  const response= await createRol(rol);
  return response;




};

/**
 * Eliminar Roles
 * @params _id Rol
 * @returns
 */

const dropRol = async (_id: string) => {
  const response = await findAndDeleteRol(_id);

  return {
    success: true,
    message: "Rol was deleted",
    data: response,
  };
};


/**
 * Añadir Modulos al Roles
 * @params _id Rol
 * @returns
 */



export { findRoles, InsertRoles, dropRol };
