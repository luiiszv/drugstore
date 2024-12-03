import RolShema from "../models/Rol";
import { RolInterface } from "../types/rol.types";
/**
 * Consultar Roles
 * @params
 * @returns
 */

const findRoles = async () => {
  const roles = await RolShema.find();
  return {
    susccess: true,
    data: roles
  }
};

/**
 * Registrar Roles
 * @params
 * @returns
 */

const InsertRoles = async (rol: RolInterface) => {
  const roles = await RolShema.create(rol);
  return {
    success: true,
    data: roles
  }
};

export { findRoles, InsertRoles };
