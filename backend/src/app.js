import express from 'express'
import morgan from 'morgan'
import { customError } from './middlewares/handle_error.js';
import cors from 'cors'

// Dot env
import './config.js'

const app = express();

// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/',(req,res)=>{
    res.json({"message":"hello word"})
    }
)

// Error handler
app.use(customError)

export default app