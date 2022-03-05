import { Router } from "express";
import checkUser from "../../../middleware/checkUser.js";
import User from "../../../models/user.js";
import jwt from "jsonwebtoken";
const router = Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const result = await checkUser(email, password);
  const user = await User.findOne({ email: email });
  user.password = null;
  if (result) {
    const accessToken = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({ accessToken: accessToken });
  } else {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
});

export default router;
