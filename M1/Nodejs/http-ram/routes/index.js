import express  from "express";
import { homePage, addTodo, deleteTodo, updateTodo } from "../controllers/index.js";

const router =  express.Router();

router.get('/', homePage)
router.post('/add', addTodo)
router.delete('/delete/:todoId', deleteTodo)
router.patch('/update/:todoId', updateTodo)

export default router