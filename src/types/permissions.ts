import { Schema } from "mongoose";
export interface PermissionInterface {
  _id_rol: Schema.Types.ObjectId;
  _id_module: Schema.Types.ObjectId;
  canRead: boolean;
  canEdit: boolean;
  canDelete: boolean;
}
