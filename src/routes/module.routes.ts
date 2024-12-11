import { Router } from "express";
import {
  getModule,
  getModules,
  registerModule,
} from "../controllers/module.controller";

//ValidatePermissions
import { authMiddleware } from "../middleware/auth";

//Fun ValidateShema
import { validateSchema } from "../middleware/validator.schema";
//Shema
import { registerModuleShema } from "../schemas/module.schema";
const router = Router();

router.get("/", authMiddleware, getModules);
router.get("/:id",authMiddleware, getModule);
router.post("/", validateSchema(registerModuleShema), registerModule);

export default router;
