import express from "express";
import cartController from "../controllers/cart.controller.js";

const router = express.Router();

router.get('/', cartController.getCart);
router.post('/items', cartController.addCartItem);


export default router;
