import { z } from "zod";
import mongoose from "mongoose";

// Definir un esquema para las acciones permitidas
const ActionEnum = z.enum(["create", "read", "update", "delete"]);

const registerPermissionShema = z.object({
  module: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: 'ID is not valid'
  }),
  actions: z
    .array(ActionEnum)
    .nonempty({ message: "Actions array cannot be empty" }),
});

export { registerPermissionShema };
