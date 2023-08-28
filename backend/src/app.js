import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { badrequest, notFound } from './middlewares/handle_error.js';
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from 'cors'

// Dot env
import {ORIGIN} from './config.js'

const app = express();

// Middlewares
app.use(cors({ 
    origin:ORIGIN,
    credentials:true
}));
app.use(morgan('dev'));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', productsRoutes);
app.use('/api', authRoutes);


// Error handler
app.use(badrequest)
app.use(notFound)


export default app