import { Router } from "express";
import { getRoles, registerRoles } from "../controllers/roles.controller";

const router = Router();

router.get("/", getRoles);
router.post("/", registerRoles);

export default router;
