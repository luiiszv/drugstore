import PermissionShema from "../models/Permissions";
import { PermissionInterface } from "../types/permissions";


export const createPermissions= async(permission: PermissionInterface)=>{
    return await PermissionShema.create(permission);
}

export const findAllPermissions= async()=>{
    return await PermissionShema.find();
}

export const findPermissionById= async(_id:string)=>{
    return await PermissionShema.findById(_id);
}

