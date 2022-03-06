import mongoose from "mongoose";
const { Schema, model } = mongoose;
import uniqueValidator from "mongoose-unique-validator";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    password: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: false,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    dateOfBirth: { type: Date, required: false },
    image: {
      type: String,
      default: `${process.env.DOMAIN}/images/default/default-avatar.png`,
      required: false,
    },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator);

const User = new model("User", userSchema);

export default User;
