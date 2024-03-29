import { Request, Response } from "express";
import MUser, { IUser } from "../Model/MUser";
import User from "./User";
import { JWT_SECRET } from "../config";

import jwt from 'jsonwebtoken';



class Auth{

    currentUser = {} as any

        public login = async  (req: Request, res: Response) => {
        const { lastname, password } = req.body
        this.currentUser = await MUser.findOne({
            lastname , password
        })
        
        if(this.currentUser){
            const token = jwt.sign({ id: this.currentUser.id }, JWT_SECRET, { expiresIn: '1h' });
            res.json({text: "User connected", token})
        }else{
            res.json({text: "User not found"})
        }
    }
    
    public logout = (req: Request, res: Response) => {
        this.currentUser = {} as IUser
        res.json({text: "User disconnected"})
    }
}

const auth = new Auth()

export default auth