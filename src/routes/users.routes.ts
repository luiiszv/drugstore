import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.send("All of Users");
});




export default router;
