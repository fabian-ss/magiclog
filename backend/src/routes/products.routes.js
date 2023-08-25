import Router from 'express-promise-router'
import { getProducts,getAdminProducts,getProductbyId,createProduct,updateProduct,deleteProduct } from '../controllers/products.controller.js'

const router = Router();
import { isAuth, isAdmin} from '../middlewares/auth.middleware.js';

router.get('/products',isAuth,getProducts);
router.get('/adminProducts',isAuth,isAdmin,getAdminProducts);
router.get('/products/:id', getProductbyId );
router.post('/products',isAuth, createProduct);
router.put('/products/:id',isAuth, updateProduct);
router.delete('/products/:id',isAuth, deleteProduct);

export default router