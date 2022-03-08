import { Router } from "express";
import auth from "./auth/index.js";
import products from "./products/product.js";

const router = Router();

router.use("/auth", auth);
router.use("/products", products);

export default router;
