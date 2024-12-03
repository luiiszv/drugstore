import { PermissionInterface } from "../types/permission";
import PermissionShema from "../models/Permission";

/**
 * Registar Permiso
 * @params Permiso
 * @returns
 */
const insertPermission = async (permission: PermissionInterface) => {
  const newPermission = await PermissionShema.create(permission);
  return {
    susccess: true,
    data: newPermission
  }
};

/**
 * Consultar Permisos
 * @returns
 */

const findPermissions = async () => {
  const permissions = await PermissionShema.find();
  return {
    success: true,
    data: permissions,
  };
};

export { insertPermission, findPermissions };
