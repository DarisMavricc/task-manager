import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './auth.js'
import taskRoutes from './tasks.js'

dotenv.config();

connectDB();

const app = express();


app.use(express.json());

const port = process.env.PORT;

app.use('/api',authRoutes);
app.use('/api/tasks',taskRoutes);


app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
})