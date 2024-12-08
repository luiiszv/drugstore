// Import dependencias externas
import { Router } from "express";

// Import Controladores
import { registerUsers, getAllUsers, login } from "../controllers/user.controller";

// Validaciones
import { validateSchema } from "../middleware/validator.schema";
import { registerUserSchema, loginSchema } from "../schemas/user.schema";

//  Router
const router = Router();

//  rutas
router.post("/login", validateSchema(loginSchema), login);
router.get("/", getAllUsers);
router.post("/", validateSchema(registerUserSchema), registerUsers);

// Exportar Router
export default router;
