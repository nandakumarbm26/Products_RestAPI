import { Router } from 'express';
import * as productController from '@/controllers/product'; // Ensure this path and methods exist


const router = Router();

router.get('/', productController.getProducts);  // Ensure `getAllProducts` is defined
router.get('/:id', productController.getProductById); // Ensure `getProductById` is defined
router.get('/filter', productController.filterProducts); // Ensure `filterProducts` is defined
router.post('/', productController.createProduct); // Ensure `addProduct` is defined
router.put('/:id', productController.updateProduct); // Ensure `updateProduct` is defined
router.delete('/:id', productController.deleteProduct); // Ensure `deleteProduct` is defined

export default router;
