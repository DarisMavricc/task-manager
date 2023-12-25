import express from "express";
import { addTask, deleteTask } from "./routes/tasks.js";

const router = express.Router();

router.post('/addTask',addTask);
router.post('/deleteTask',deleteTask);

export default router;