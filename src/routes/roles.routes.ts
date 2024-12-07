import { Router } from "express";
import { getRoles, registerRoles, deleteRole } from "../controllers/roles.controller";

const router = Router();

import { validateSchema } from "../middleware/validator.schema";
import { registerRolShema } from "../schemas/rol.schema";
router.get("/", getRoles);
router.post("/", validateSchema(registerRolShema), registerRoles);
router.delete("/:id", deleteRole);


export default router;
