import express from "express"
import authController from "../controllers/auth.controller";

const router = express.Router();


router.get('/signup', authController.getSignup);

router.get('/login', authController.getLogin);




export default router;