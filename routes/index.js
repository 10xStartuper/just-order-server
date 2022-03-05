import { Router } from "express";
import api from "./api/index.js";
const router = Router();

router.use("/api/", api);

router.use("*", (req, res) => {
  res.send("404");
});

export default router;
