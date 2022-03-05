import { Router } from "express";
import auth from "./auth/index.js";

const router = Router();

router.use("/auth", auth);

export default router;
