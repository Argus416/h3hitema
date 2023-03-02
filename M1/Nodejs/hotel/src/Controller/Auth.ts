import { Request, Response } from "express";
import { IUser } from "../Model/MUser";
import User from "./User";

class Auth{

    /*
        On crée un utilisateur vide pour stocker l'utilisateur connecté
     */
    currentUser = {} as IUser

    /*
        On vérifie si l'utilisateur existe dans la liste des utilisateurs
        (User.users) et on le connecte
     */
    public login = (req: Request, res: Response) => {
        const { lastname, password } = req.body
        this.currentUser = User.users.find(user => user.lastname === lastname && user.password === password) ?? {} as IUser
        if(this.currentUser.id){
            res.json({text: "User connected"})
        }else{
            res.json({text: "User not found"})
        }
    }
    
    /*
        On déconnecte l'utilisateur en vidant l'utilisateur connecté
     */
    public logout = (req: Request, res: Response) => {
        this.currentUser = {} as IUser
        res.json({text: "User disconnected"})
    }
}

const auth = new Auth()

export default auth