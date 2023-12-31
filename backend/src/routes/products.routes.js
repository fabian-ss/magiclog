import Router from 'express-promise-router'
import { getProducts,getAdminProducts,getProductbyId,createProduct,updateProduct,deleteProduct } from '../controllers/products.controller.js'

const router = Router();
import { isAuth, isAdmin} from '../middlewares/auth.middleware.js';

import { validateSchema } from "../middlewares/validate.middleware.js";
import { productSchema } from "../schemas/product.schema.js";

router.get('/products',getProducts);
router.get('/adminProducts',isAuth,isAdmin,getAdminProducts);
router.get('/products/:id', getProductbyId );
router.post('/products',isAuth,validateSchema(productSchema), createProduct);
router.put('/products/:id',isAuth,validateSchema(productSchema), updateProduct);
router.delete('/products/:id',isAuth, deleteProduct);

export default router