import {
  createPermissions,
  findAllPermissions,
  findPermissionById,
} from "../repositories/permissionRepository";
import { PermissionInterface } from "../types/permissions";

/**
 * Register Permissions
 * @params permission
 * @returns
 */

const insertPermission = async (permission: PermissionInterface) => {

  const response = await createPermissions(permission);
  return {
    success: true,
    message: "Permission created",
    data: response,
  };
};

/**
 * Find Permissions
 * @params
 * @returns
 */

const findPermissions = async () => {
  const response = await findAllPermissions();
  return {
    success: true,
    data: response,
  };
};

const findOnePermission = async (_id: string) => {
  const response = await findPermissionById(_id);
  return {
    success: true,
    message: "Permission found",
    data: response,
  };
};

export  { insertPermission, findPermissions, findOnePermission };
