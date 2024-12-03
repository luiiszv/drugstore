import { Router } from "express";

import { registerUsers, getAllUsers } from "../controllers/user.controller";

//Validations
import { validateSchema } from "../middleware/validator.schema";
import { registerUserSchema } from "../schemas/user.schema";

const router = Router();
router.get("/", getAllUsers);
router.post("/", validateSchema(registerUserSchema), registerUsers);

export default router;
