import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../../../models/user.js";

const router = Router();

router.post("/", async (req, res) => {
  let hashedPass = "";
  await bcrypt.hash(req.body.password, 10).then(function (hash) {
    hashedPass = hash;
  });
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPass,
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
