import { Router } from 'express';
import productRoutes from './product';


const router = Router();

// Product routes (Import from product.js in the routes folder)
router.use('/products', productRoutes);

export default router;
