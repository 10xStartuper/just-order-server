import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../../../models/user.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/", async (req, res, next) => {
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
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        _id,
        createdAt,
        updatedAt,
        __v,
      } = result;
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        _id,
        createdAt,
        updatedAt,
        __v,
      };
      const accessToken = jwt.sign({ userData }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.status(201).json({ accessToken: accessToken });
    })
    .catch(function (err) {
      console.log("Error creating user");
      res.status(500).json({ error: err });
    });
});

export default router;
