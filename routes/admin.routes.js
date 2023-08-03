import express from "express"
import adminController from "../controllers/admin.controller.js";
import imageUploadMiddleware from '../middlewares/image-upload.js'

const router = express.Router();



router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);


router.post('/products', imageUploadMiddleware, adminController.createNewProduct)

router.get('/products/:id', adminController.getUpdatedProduct)

router.post('/products/:id', imageUploadMiddleware, adminController.updateProduct)





export default router;