import express from "express";
import { getUser, login, logout, register } from "./routes/auth.js";

const router = express.Router();

router.post('/login',login);
router.post('/register',register);
router.get('/logout',logout);
router.post('/getUser',getUser);

export default router;