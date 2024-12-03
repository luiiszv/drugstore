import { Types } from "mongoose";

export interface PermissionInterface {
  module: Types.ObjectId;
  actions: [string];
}
