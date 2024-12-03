import mongoose from "mongoose";
import { z } from "zod";

const registerUserSchema = z.object({
  name: z.string({ required_error: "Name es required" }).min(3, {message: 'name must be at least 3 characters'}),
  lastName: z.string({ required_error: "LastName is requeried" }).min(3, {message: 'lastName must be at least 3 characters'}),
  email: z.string({ required_error: "Email is not valid" }).email({message: 'Invalid Email'}),
  password: z.string({ required_error: "Password " }).min(4, {message: 'Passrord must be at least 4 characters'}),
  roles: z.array(
    z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
    {
      message: "Id Rol is not valid",
    }
  ),
});

export { registerUserSchema };
