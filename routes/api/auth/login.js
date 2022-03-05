import { Router } from "express";
import checkUser from "../../../middleware/checkUser.js";

const router = Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const result = await checkUser(email, password);
  if (result) {
    res.status(200).json({
      message: "User logged in",
    });
  } else {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
});

export default router;
