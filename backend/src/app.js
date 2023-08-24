import express from 'express'
import morgan from 'morgan'
import { customError } from './middlewares/handle_error.js';
import  productsRoutes  from "./routes/products.routes.js";
import  authRoutes  from "./routes/auth.routes.js";
import cors from 'cors'

// Dot env
import './config.js'

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api',productsRoutes);
app.use('/api',authRoutes);


// Error handler
app.use(customError);

export default app