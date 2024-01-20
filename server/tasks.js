import express from "express";
import { addTask, deleteTask, editTask, getTasks, updateTask } from "./routes/tasks.js";

const router = express.Router();

router.post('/addTask',addTask);
router.get('/getTasks',getTasks);
router.post('/updateTask',updateTask);
router.post('/editTask',editTask);
router.delete('/deleteTask/:id',deleteTask);

export default router;