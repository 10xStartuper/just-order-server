import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../../../models/user.js";

const router = Router();

router.post("/", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
  };
  const newUser = new User(user);
  await newUser
    .save()
    .then(function (result) {
      console.log("User created");
      res.status(201).json(newUser);
    })
    .catch(function (err) {
      console.log("Error creating user");
      res.status(500).json({ error: err });
    });
});

export default router;
