import { Router } from "express";
import {
  getPermissions,
  registerPermissions,
} from "../controllers/permissions.controller";

import { validateSchema } from "../middleware/validator.schema";
import { registerPermissionShema } from "../schemas/permission.schema";

const router = Router();
router.get("/", getPermissions);
router.post("/", validateSchema(registerPermissionShema), registerPermissions);

export default router;
