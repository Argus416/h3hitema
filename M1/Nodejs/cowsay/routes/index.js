import express  from "express";
import { cowsay, homePage } from "../controllers/index.js";

const router =  express.Router();

router.get('/', homePage)
router.get('/cowsay', cowsay)


export default router