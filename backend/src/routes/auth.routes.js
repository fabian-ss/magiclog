import Router from 'express-promise-router'
import { signin, signup, logout, salesman } from '../controllers/auth.controller.js'
import { isAuth, isAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/logout', logout);
router.get('/salesman', isAuth, isAdmin, salesman);


export default router