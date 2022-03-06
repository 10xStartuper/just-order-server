import mongoose from "mongoose";
const { Schema, model } = mongoose;
import uniqueValidator from "mongoose-unique-validator";
import dotenv from "dotenv";
dotenv.config();

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: {
      type: String,
      default: `${process.env.DOMAIN}/images/default/default-product.jpeg`,
      required: false,
    },
    category: { type: String, required: true, default: "other" },
  },
  { timestamps: true }
);
productSchema.plugin(uniqueValidator);

const Product = new model("Product", productSchema);

export default Product;
