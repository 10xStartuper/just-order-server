import { Router } from "express";
const router = Router();
import Product from "../../../models/product.js";

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

router.post("/create", async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(501).json({ message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    res.status(202).json({ message: "Product has been deleted" });
  } catch (err) {
    res.status(204).json({ message: err.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    await product.update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    await product.save();
    res.status(200).json({ message: "Product has been updated" });
  } catch (err) {
    res.status(501).json({ message: err.message });
  }
});

export default router;
