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
  res.render("page", {
    title: "404 | NOT FOUND",
    content: "Seems like you have made wrong request",
  });
});

export default router;
