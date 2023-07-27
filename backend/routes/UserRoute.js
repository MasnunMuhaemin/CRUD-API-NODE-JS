import express from "express";
import {getUsers, getUserById, createUSer, updateUSer, deleteUSer} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUSer);
router.patch('/users/:id', updateUSer);
router.delete('/users/:id', deleteUSer);

export default router;