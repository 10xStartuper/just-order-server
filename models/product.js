import mongoose from "mongoose";
const { Schema, model } = mongoose;
import uniqueValidator from "mongoose-unique-validator";

const productSchema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
productSchema.plugin(uniqueValidator);

const Product = new model("Product", productSchema);

export default Product;
