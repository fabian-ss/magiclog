import Router from 'express-promise-router'
import { signin, signup, logout, salesman } from '../controllers/auth.controller.js'
import { isAuth, isAdmin } from '../middlewares/auth.middleware.js';

import { validateSchema } from "../middlewares/validate.middleware.js";
import { signupUserSchema, signinUserSchema } from "../schemas/user.schema.js";

const router = Router();

router.post('/signin', signin);
router.post('/signup',validateSchema(signupUserSchema), signup);
router.post('/logout', logout);
router.get('/salesman', isAuth, isAdmin, salesman);


export default router