import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './auth.js'
import taskRoutes from './tasks.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(cookieParser());

app.use(express.json());

const port = process.env.PORT;

app.use('/api',authRoutes);
app.use('/api/tasks',taskRoutes);


app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
})