import { z } from "zod";

const registerRolShema = z.object({
  name: z.string({ required_error: "Name is requeried" }).min(2, { message: "Name must be at least 2 characteres" }),
  description: z.string({ required_error: "Description is requeried" }).min(2, { message: "Description must be at least 2 characteres" }),
});

export { registerRolShema };
