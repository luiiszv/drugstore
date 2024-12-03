import { Router } from "express";
import {
  getModule,
  getModules,
  registerModule,
} from "../controllers/module.controller";

//Fun ValidateShema
import { validateSchema } from "../middleware/validator.schema";
//Shema
import { registerModuleShema } from "../schemas/module.schema";
const router = Router();

router.get("/", getModules);
router.get("/:id", getModule);
router.post("/", validateSchema(registerModuleShema), registerModule);

export default router;
