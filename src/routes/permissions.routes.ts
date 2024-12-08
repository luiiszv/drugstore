import { Router } from "express";
import {
  createPermission,
  getAllPermissions,
  getOnePermission,
} from "../controllers/permission.controller";

//Validations
import { validateSchema } from "../middleware/validator.schema";
import { RegisterPermissions } from "../schemas/permission.schema";
const router = Router();

router.get("/", getAllPermissions);
router.get("/:id", getOnePermission);
router.post("/", validateSchema(RegisterPermissions), createPermission);

export default router;
