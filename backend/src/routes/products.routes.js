import Router from 'express-promise-router'
import { getProducts,getProductbyId,createProduct,updateProduct,deleteProduct } from '../controllers/products.controller.js'

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductbyId );
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router