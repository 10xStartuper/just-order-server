import { Router } from "express";
import api from "./api/index.js";
const router = Router();

router.get("/", (req, res) => {
  res.render("page", {
    title: "Welcome to YesU API",
    content: "Use {/api/} route to interact with our API",
  });
});

router.use("/api/", api);

router.use("*", (req, res) => {
  res.send("404");
});

export default router;
