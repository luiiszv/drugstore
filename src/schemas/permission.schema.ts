import mongoose from "mongoose";
import { z } from "zod";

export const RegisterPermissions = z.object({
  _id_rol: z
    .string({ required_error: "id is requeried" })
    .refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: "Id is not valid",
    }),

  _id_module: z
    .string({ required_error: "_id_module is requeried" })
    .refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: "Id is not valid",
    }),
  canRead: z.boolean({ required_error: "permission is requerid" }),
  canWrite: z.boolean({ required_error: "permission is requerid" }),
  canEdit: z.boolean({ required_error: "permission is requerid" }),
  canDelete: z.boolean({ required_error: "permission is requerid" }),
});
