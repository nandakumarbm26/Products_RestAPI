import { Router } from 'express';
import * as productController from '@/controllers/product'; 


const router = Router();

router.get('/', productController.getProducts);  
router.get('/:id', productController.getProductById);
router.get('/filter', productController.filterProducts); 
router.post('/', productController.createProduct); 
router.put('/:id', productController.updateProduct); 
router.delete('/:id', productController.deleteProduct); 

export default router;
