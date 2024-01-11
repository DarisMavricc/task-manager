import express from "express";
import { addTask, deleteTask, getTasks } from "./routes/tasks.js";

const router = express.Router();

router.post('/addTask',addTask);
router.post('/getTasks',getTasks);
router.post('/deleteTask',deleteTask);

export default router;